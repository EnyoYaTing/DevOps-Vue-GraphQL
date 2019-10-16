FROM alpine
MAINTAINER neo
run apk update
RUN apk add gcc gfortran python3 python3-dev py3-pip build-base wget freetype-dev libpng-dev openblas-dev jpeg-dev zlib-dev
#run apk --no-cache --update-cache add gcc gfortran python3 python3-dev py3-pip build-base wget freetype-dev libpng-dev openblas-dev
run pip3 install --upgrade pip
workdir /tmp
copy /requirements.txt requirements.txt
run pip3 install -r requirements.txt
volume /src
cmd tail -f /dev/null
