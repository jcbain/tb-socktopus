FROM debian
WORKDIR /app
COPY ./ /app/
RUN /bin/bash ./scripts/provision.sh
RUN /bin/bash ./scripts/build.sh
CMD ["npm", "run", "start"]