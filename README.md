## Pasos para ejecutar la aplicación en local

### 1. Instalar dependencias

Asegúrate de estar en la raíz del proyecto y ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```bash
npm install
nx serve shell
nx serve mfe1
nx serve mfe2

### Recuerda que los puertos deben ser diferente

### Comando para generar la imagen
docker build --memory=4g --memory-swap=4g -f Dockerfile.mfe1 -t mfe1:latest . 

### comando para generar el contenedor
docker run -d -p 4203:4203 mfe2