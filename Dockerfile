# Build

FROM node:12.18.4-slim AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
RUN rm -rf build/__snowpack__ build/_dist_ build/web_modules

# Runtime

FROM nginx:alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

# RUN cat /etc/nginx/nginx.conf
# RUN cat /etc/nginx/conf.d/default.conf
