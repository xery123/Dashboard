
FROM node:18-alpine AS build


WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY . .


ENV API_URL_ENVIRONMENT=test=https://testactors2.limber.io,https://test2.limber.io,https://testactors4.limber.io;app=https://app2.limber.io,https://app2.limber.io,https://app4.limber.io
ENV URL_KEYCLOACK=https://devauth.limber.io/auth
ENV REALM_KEYCLOACK=limber-main-test
ENV CLIENT_ID_KEYCLOACK=limber_angular_ui


RUN sed -i "s|process.env\['API_URL_ENVIRONMENT'\] \|\| ''|'$API_URL_ENVIRONMENT'|g" src/environments/environment.prod.ts
RUN sed -i "s|process.env\['URL_KEYCLOACK'\] \|\| ''|'$URL_KEYCLOACK'|g" src/environments/environment.prod.ts
RUN sed -i "s|process.env\['REALM_KEYCLOACK'\] \|\| ''|'$REALM_KEYCLOACK'|g" src/environments/environment.prod.ts
RUN sed -i "s|process.env\['CLIENT_ID_KEYCLOACK'\] \|\| ''|'$CLIENT_ID_KEYCLOACK'|g" src/environments/environment.prod.ts

RUN npm run build


FROM nginx:1.23.3-alpine AS final


WORKDIR /app
COPY --from=build /app/dist/workers/browser/ /usr/share/nginx/html/

COPY /nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
