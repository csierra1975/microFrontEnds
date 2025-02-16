# Utilizamos una imagen base de Node para compilar la aplicación
FROM node:16 AS build

# Definimos el directorio de trabajo
WORKDIR /app

# Copiamos el proyecto completo dentro del contenedor
COPY . .

# Instalamos las dependencias
RUN npm install

# Compilamos la aplicación MFE2
RUN npm run build:mfe2 --prod

# Exponemos el puerto 4202 para acceder a MFE2 
EXPOSE 4202

# Comando para ejecutar el servidor de desarrollo (si se requiere) MFE2
CMD ["npx", "http-server", "dist/apps/mfe2"]
