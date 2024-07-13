FROM python:3.8-buster

# Installing all python dependencies
ADD requirements.txt /requirements.txt
RUN pip install -r /requirements.txt

ADD . /app

WORKDIR /app
