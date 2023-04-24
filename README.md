# Instrucciones para correr el proyecto
Este proyecto está construido con Angular, Node.js, Express.js y SQLite como base de datos. Sigue las siguientes instrucciones para correrlo en tu máquina:

## Prerrequisitos
Asegúrate de tener instalados los siguientes programas:

- [Node.js (versión 12 o superior)](https://nodejs.org/en)
- Angular CLI
- Git
## Clonar el repositorio
Para comenzar, clona este repositorio en tu máquina utilizando Git:

`git clone https://github.com/tu-usuario/tu-proyecto.git`

## Instalar dependencias
Una vez que hayas clonado el repositorio, accede a la carpeta raíz del proyecto y ejecuta el siguiente comando para instalar las dependencias de Node.js:


`cd casa-mascota`
`npm install`

## Crear la base de datos
Antes de correr el servidor, necesitas crear la base de datos SQLite. Ejecuta el siguiente comando en la carpeta database para crear el archivo de la base de datos:
**Esta parte es solo si por algún motivo no está la base de datos**

`cd src/backend/db`
`touch database.sqlite`

## Correr el servidor
Para correr el servidor de Express.js, ejecuta el siguiente comando en la carpeta raíz del proyecto:


`node src/server.js`
**El servidor estará corriendo en http://localhost:3000.**

Correr la aplicación Angular
Para correr la aplicación Angular, abre otra terminal y accede a la carpeta client del proyecto. Una vez allí, ejecuta el siguiente comando:


`ng serve`
La aplicación estará corriendo en http://localhost:4200.

