# 🩺 Health Care – Backend (Service)

Este repositorio corresponde al *backend* del proyecto *Health Care*, encargado de la lógica del servidor, la conexión con la base de datos y la gestión de autenticación y validaciones.

Está desarrollado con *Node.js, **Express* y *MongoDB/Mongoose*.

---

## ✅ Requisitos previos

Antes de instalar y ejecutar el backend, es necesario contar con:

- *Node.js: versión **18.x o superior*  
- *npm* (incluido con Node.js) y/o *yarn* (opcional).
- Acceso a una instancia de *MongoDB* (local o en la nube, por ejemplo MongoDB Atlas).
- Opcional pero recomendado:
  - *Editor de código* (VS Code, WebStorm, etc.)
  - *Git* para clonar el repositorio.

---

## 📦 Dependencias

Las dependencias del proyecto se gestionan a través de package.json.

### Dependencias principales (dependencies)

- express ^4.18.2 – Framework para crear el servidor HTTP.
- mongoose ^8.0.1 – ODM para trabajar con MongoDB.
- mongodb ^6.3.0 – Driver oficial de MongoDB.
- cors ^2.8.5 – Manejo de CORS.
- cookie-parser ~1.4.4 – Parseo de cookies.
- morgan ~1.9.1 – Logger de peticiones HTTP.
- express-validator ^7.0.1 – Validación de datos en las rutas.
- dotenv ^16.3.1 – Manejo de variables de entorno.
- jose ^5.1.1 – Manejo de tokens y criptografía (JWT, etc.).
- debug ~2.6.9 – Utilidad para logs de depuración.

### Dependencias de desarrollo (devDependencies)

- nodemon ^3.0.1 – Reinicio automático del servidor en entorno de desarrollo.

---

## 🛠️ Instalación y configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/Rodrii14/HealthCare-Client
cd HealthCare-Client
```

### 2. Instalar dependencias

Puedes usar npm o yarn.

Opción A: usando npm (recomendado)
```bash
npm install
```

Opción B: usando yarn

Si aún no tienes yarn instalado:
```bash
npm install --global yarn
```

Luego, dentro del proyecto:
```bash
yarn
```
🌐 Variables de entorno

Las variables de entorno se definen en un archivo .env en la raíz del proyecto backend.

Ejemplo de contenido:
```env
DEBUG=Service:*
PORT=
DBURI=
SECRET=
EXPIRATION=
```

Descripción de variables

``DEBUG``
Controla los logs de depuración (por ejemplo, mensajes con el namespace Service:*).

``PORT``
Puerto en el que se ejecutará el servidor backend.

``DBURI``
Cadena de conexión a la base de datos MongoDB.

``SECRET``
Llave secreta utilizada para firmar y verificar tokens (por ejemplo, JWT).

``EXPIRATION``
Tiempo de expiración de los tokens.

🚀 Ejecución de la aplicación

Una vez instaladas las dependencias y configuradas las variables de entorno, puedes ejecutar el backend.

Modo desarrollo
```bash
npm run dev
```

Usa nodemon para reiniciar el servidor automáticamente cuando se detectan cambios en el código.

Modo producción
```bash
npm start
```
