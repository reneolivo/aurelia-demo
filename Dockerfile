FROM digitallyseamless/nodejs-bower-grunt

RUN npm install yo generator-aurelia

RUN adduser --disabled-password --gecos "" dock && \
  echo "dock ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

ENV HOME /home/dock

RUN mkdir /usr/src/app && chown dock:dock /usr/src/app

VOLUME ["/usr/src/app"]

WORKDIR /usr/src/app

USER dock

EXPOSE 9000
