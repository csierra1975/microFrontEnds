# Utilizamos una imagen base de Node para compilar la aplicación
FROM node:16 AS build

# Definimos el directorio de trabajo
WORKDIR /app

# Copiamos el proyecto completo dentro del contenedor
COPY . .

# Instalamos las dependencias
RUN npm install

# Compilamos la aplicación MFE1 
RUN npm run build:mfe1 --prod

# Exponemos el puerto 4201 para acceder a MFE1 
EXPOSE 4201

# Comando para ejecutar el servidor de desarrollo (si se requiere) en MFE1 
CMD ["npx", "http-server", "dist/apps/mfe1"]
