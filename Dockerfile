FROM openjdk:8-jre
LABEL maintainer="nils.olsson@arcticblue.se"

ENTRYPOINT ["/usr/bin/java", "-jar", "/usr/share/heracles/heracles.jar", "server"]

ARG JAR_FILE
ADD target/${JAR_FILE} /usr/share/heracles/heracles.jar
