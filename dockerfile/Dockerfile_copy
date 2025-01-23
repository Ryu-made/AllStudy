# 베이스 이미지
FROM ubuntu:latest

# 메타데이터 추가
LABEL maintainer="DH blackey2471@gmail.com"

# 명령어 실행
# 필요한 패키지 설치
RUN apt update -y && apt install -y sudo passwd openssh-server wget nano net-tools iputils-ping && \
    apt install -y openjdk-8-jdk && \
    apt clean && rm -rf /var/lib/apt/lists/* && \
    groupadd hadoop && useradd -m -d /home/hadoop -s /bin/bash -g hadoop -G sudo hadoop && \
    # {-m -d [directory] -s [runtime file] 이 부분은 생략 가능하다.}
    echo "hadoop:1234" | chpasswd && \
    mkdir -p /home/hadoop/.ssh && chown -R hadoop:hadoop /home/hadoop

# 하둡 설치
RUN mkdir -p /home/hadoop && \
    wget https://archive.apache.org/dist/hadoop/common/hadoop-3.4.1/hadoop-3.4.1.tar.gz -P /home/hadoop && \
    tar -xvzf /home/hadoop/hadoop-3.4.1.tar.gz -C /home/hadoop && \
    rm -rf /home/hadoop/hadoop-3.4.1.tar.gz && \
    chown -R hadoop:hadoop /home/hadoop/hadoop-3.4.1 && \
    mkdir -p /data/hadoop/tmp && \
    mkdir -p /data/hadoop/dfs/name && \
    mkdir -p /data/hadoop/dfs/data && \
    chown -R hadoop:hadoop /data/hadoop && \
    chmod -R 777 /data/hadoop && \
    # 환경변수 등록하기
    echo "export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64" >> /home/hadoop/.bashrc && \
    echo "export HADOOP_HOME=/home/hadoop/hadoop-3.4.1" >> /home/hadoop/.bashrc && \
    echo "export HADOOP_CONF_DIR=\$HADOOP_HOME/etc/hadoop" >> /home/hadoop/.bashrc && \
    echo "export PATH=\$PATH:\$JAVA_HOME/bin:\$HADOOP_HOME/bin:\$HADOOP_HOME/sbin" >> /home/hadoop/.bashrc && \
    chown hadoop:hadoop /home/hadoop/.bashrc && \
    mkdir -p /var/run/sshd && \
    echo 'PermitRootLogin no' >> /etc/ssh/sshd_config && \
    echo 'PasswordAuthentication yes' >> /etc/ssh/sshd_config

EXPOSE 22

CMD ["/bin/bash"]