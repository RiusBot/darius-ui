FROM node:latest AS ui-build
WORKDIR /usr/src/app
COPY . ./my-app/

RUN cd my-app && npm install -g npm@latest && npm install && npm run build



FROM nginx:1.19

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=ui-build /usr/src/app/my-app/build /usr/share/nginx/html

EXPOSE 80
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
