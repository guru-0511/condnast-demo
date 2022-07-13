FROM cypress/included:7.7.0
RUN mkdir /cypress-docker
WORKDIR /cypress-docker
COPY ./package.json .
COPY ./package-lock.json .
COPY ./cypress.json .
COPY ./cypress ./cypress
RUN rm -rf node_modules && rm ./package-lock.json && npm install
ENTRYPOINT ["npm", "run"]