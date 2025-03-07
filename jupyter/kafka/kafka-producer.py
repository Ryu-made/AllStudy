from kafka import KafkaProducer as PD
import json
import time
import random

def generate_smartcar_data():    
    return {
        "car_id": random.randint(1, 100), # 임의의 자동차 ID
        "speed": round(random.uniform(0, 150), 2), # 속도 (km/h)
        "latitude": round(random.uniform(-90.0, 90.0), 6), # 위도
        "longitude": round(random.uniform(-180.0, 180.0), 6), # 경도
        "timestamp": time.time() # 현재 시간 (UNIX 타임스탬프)
    }

producer = PD(
    bootstrap_servers='kafka:9092', #브로커 주소
    value_serializer = lambda v:json.dumps(v).encode('utf-8') # Message의 값 역직렬화
)
if __name__ == '__main__':
    try:
        for r in range(100):
            data = generate_smartcar_data()
            producer.send('smart-car', value=data) # 'smart-car' 토픽으로 전송
            print(f'Sent: {data}')
            time.sleep(1) # 1초에 하나씩 전송
    except:
        print('프로듀서 전송 에러발생')
    finally:
        producer.close()