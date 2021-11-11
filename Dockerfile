# Usar  imagen de nodejs
FROM node:12-alpine
# Crear carpeta de trabajo
RUN mkdir -p /usr/src/app
# seleccionar carpeta de trabajo
WORKDIR /usr/src/app
# copiar archivos de la api
COPY . .
# instalar blibliotecas
RUN npm install
# exponer el puerto
EXPOSE 80
# ejecutar comando para iniciar el servicio
CMD npm start
