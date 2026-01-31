# Stage 1: Build
FROM node:20-slim AS build
WORKDIR /app

# Wir kopieren erst nur die Package-Dateien
COPY package*.json ./

# Cache-Mount nutzen, um npm zu beschleunigen und Netzwerkfehler zu minimieren
RUN npm install --no-audit --no-fund

COPY . .
RUN npm run build

# Stage 2: Runtime
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
