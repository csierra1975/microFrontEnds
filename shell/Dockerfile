# Utilizamos una imagen base de Node para compilar la aplicación
FROM node:16 AS build

# Definimos el directorio de trabajo
WORKDIR /app

# Copiamos el proyecto completo dentro del contenedor
COPY . .

# Instalamos las dependencias
RUN npm install

# Compilamos la aplicación de la shell
RUN npm run build:app-shell --prod

# Ahora, usamos una imagen de Nginx para servir los archivos estáticos
FROM nginx:alpine

# Copiamos los archivos de la Shell desde el contenedor de construcción
COPY --from=build /app/dist/apps/shell /usr/share/nginx/html

# Exponemos el puerto 80 para acceder a la aplicación
EXPOSE 80

# Ejecutamos Nginx para servir la aplicación
CMD ["nginx", "-g", "daemon off;"]
