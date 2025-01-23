from kafka import KafkaConsumer as CM
from hdfs import InsecureClient
import pandas as pd
import json
import time
import os
from datetime import datetime

consumer = CM(
    'smartcar-data', # 토픽 이름
    bootstrap_servers='bdata.iptime.org:9092', # 브로커 주소
    auto_offset_reset='latest', # 오프셋 위치 (earliest: 가장 처음, latest: 가장 최근)
    group_id=None, # Consumer 그룹 식별자
    value_deserializer = lambda x:json.loads(x.decode('utf-8')), # Message의 값 역직렬화
    consumer_timeout_ms = 30000 # Data loading 최대 시간(Delay time)
)

hdfs = InsecureClient('http://namenode:9870', user='hadoop')    
arr = []
for message in consumer:
    print(f'\r{message.value}', end='', flush=True)
    arr.append(message.value)
    if len(arr) >= 60:
        data = pd.DataFrame(arr)
        timestamp = datetime.now().strftime('%Y%m%d%H%M%S%f')[:-3]
        csv_path = f'kafka-consumer_{timestamp}.csv'
        data.to_csv(csv_path, index=True)
        try:
            path = f'/user/hadoop/{csv_path}'
            hdfs.upload(path, csv_path)
            print(f'hdfs 업로드 완료: {csv_path}')
            
        except Exception as e:
            print(f'hdfs 업로드 실패 - {e}')
        finally:
            arr.clear()
            os.remove(f'./{csv_path}')
            time.sleep(0.01)