FROM openjdk:20-jdk-oracle

VOLUME /tmp

ARG JAR_FILE
COPY dockerize dockerize
COPY target/${JAR_FILE} E-Commerce-Back-End.jar
CMD ./dockerize -wait tcp://localhost:3306 -timeout 15m java -Djava.security.egd=file:/dev/./urandom -jar /E-Commerce-Back-End.jar