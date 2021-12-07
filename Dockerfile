FROM node:latest AS ui-build
WORKDIR /usr/src/app
COPY . ./my-app/
RUN ls -al my-app
RUN cd my-app && npm install -g npm@latest && npm install && npm run build

FROM node:latest AS server-build
WORKDIR /usr/src/app
COPY --from=ui-build /usr/src/app/my-app/dist ./my-app/dist
COPY . ./my-app/
RUN cd my-app && npm install -g npm@latest && npm install
WORKDIR /usr/src/app/my-app

EXPOSE 3000

CMD ["npm", "run", "serve"]