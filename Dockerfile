# Etapa de compilación
FROM node:18-alpine AS build

# Instalar dependencias y compilar la aplicación Angular
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY src/app/environments/environment.prod.ts /app/src/app/environments/environment.prod.ts
COPY . .

# Definir la variable de entorno API_URL_ENVIRONMENT
ENV API_URL_ENVIRONMENT=https://testactors2.limber.io

# Reemplazar la variable de entorno en environment.prod.ts
RUN sed -i "s|process.env\['API_URL_ENVIRONMENT'\] \|\| ''|'$API_URL_ENVIRONMENT'|g" /app/src/app/environments/environment.prod.ts

RUN npm run build

# Etapa de producción
FROM nginx:1.23.3-alpine AS final

# Copiar el dist compilado
WORKDIR /app
COPY --from=build /app/dist/workers/browser/ /usr/share/nginx/html/

# Copiar la configuración de Nginx
COPY /nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
