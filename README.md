# Local:

npm run start:app

# Production:

docker build -t ng-docker-app:v1.0 .

docker run -p 80:80 -d ng-docker-app:v1.0
