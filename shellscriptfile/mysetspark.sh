sudo wget https://dlcdn.apache.org/spark/spark-3.5.4/spark-3.5.4-bin-hadoop3.tgz
tar -xvzf spark-3.5.4-bin-hadoop3.tgz
mv spark-3.5.4-bin-hadoop3 spark
rm -rf spark-3.5.4-bin-hadoop3.tgz

# sudo apt-get install openssl1 libssl libisal
echo "export SPARK_HOME=/home/hadoop/spark" >> ~/.bashrc
echo "export PATH=\$SPARK_HOME/bin:\$SPARK_HOME/sbin:\$PATH" >> ~/.bashrc
echo "export SPARK_DIST_CLASSPATH=\$(/home/hadoop/hadoop-3.4.1/bin/hadoop classpath)" >> ~/.bashrc
echo "export LD_LIBRARY_PATH=/usr/lib/x86_64-linux-gnu:\$LD_LIBRARY_PATH" >> ~/.bashrc
echo "export LD_LIBRARY_PATH=/usr/lib:/lib:/usr/local/lib:\$HADOOP_HOME/lib/native:\$LD_LIBRARY_PATH" >> ~/.bashrc

source ~/.bashrc

echo "======================================================================"
echo "설정완료 진행중..."

cp $SPARK_HOME/conf/spark-env.sh.template $SPARK_HOME/conf/spark-env.sh
echo "export SPARK_MASTER_HOST=namenode" >> $SPARK_HOME/conf/spark-env.sh
echo "export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64" >> $SPARK_HOME/conf/spark-env.sh
echo "export HADOOP_CONF_DIR=/home/hadoop/hadoop-3.4.1/etc/hadoop" >> $SPARK_HOME/conf/spark-env.sh
echo "export YARN_CONF_DIR=/home/hadoop/hadoop-3.4.1/etc/hadoop" >> $SPARK_HOME/conf/spark-env.sh
echo "export SPARK_DIST_CLASSPATH=\$(/home/hadoop/hadoop-3.4.1/bin/hadoop classpath)" >> $SPARK_HOME/conf/spark-env.sh
echo "export LD_LIBRARY_PATH=/usr/lib/x86_64-linux-gnu:\$LD_LIBRARY_PATH" >> $SPARK_HOME/conf/spark-env.sh

cp $SPARK_HOME/conf/spark-defaults.conf.template $SPARK_HOME/conf/spark-defaults.conf
echo "spark.master            yarn" >> $SPARK_HOME/conf/spark-defaults.conf

cp $SPARK_HOME/conf/workers.template $SPARK_HOME/conf/workers
echo "datanode1" > $SPARK_HOME/conf/workers
echo "datanode2" >> $SPARK_HOME/conf/workers
echo "datanode3" >> $SPARK_HOME/conf/workers
echo "datanode4" >> $SPARK_HOME/conf/workers

scp -r ./spark/* hadoop@datanode1:/home/hadoop/spark/
scp -r ./spark/* hadoop@datanode2:/home/hadoop/spark/
scp -r ./spark/* hadoop@datanode3:/home/hadoop/spark/
scp -r ./spark/* hadoop@datanode4:/home/hadoop/spark/

echo "spark설정이 완료되었습니다."
