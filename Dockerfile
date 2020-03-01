FROM debian:stretch

RUN apt-get -y update
RUN apt -y  install nginx
RUN apt-get -y install ufw
