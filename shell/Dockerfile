# Dockerfile.shell

# Etapa de construcción: compilamos la aplicación con Node
FROM node:16-alpine AS builder
WORKDIR /app

# Copiamos los archivos de dependencias (package.json y package-lock.json) desde la raíz
COPY package*.json ./

# Instalamos dependencias
RUN npm install --legacy-peer-deps

# Copiamos todo el monorepo (usa .dockerignore para excluir node_modules, dist, etc.)
COPY . .

# Compilamos la aplicación "shell" con Nx
RUN npx nx build shell --prod

# Etapa final: usamos Nginx para servir la aplicación
FROM nginx:alpine

# Copiamos la build generada por Nx en la carpeta de Nginx
COPY --from=builder /app/dist/shell /usr/share/nginx/html

# Exponemos el puerto 80 (por defecto de Nginx)
EXPOSE 80

# Arrancamos Nginx
CMD ["nginx", "-g", "daemon off;"]
