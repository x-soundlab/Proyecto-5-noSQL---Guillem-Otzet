# PROYECTO 5 - NoSQL

API REST para gestionar información de películas y de los cines donde se proyectan. Este proyecto corresponde al módulo 5 de bases de datos NoSQL del Máster Prometeo.

## Descripción

El objetivo de este proyecto es desarrollar un servidor con Express conectado a una base de datos MongoDB mediante Mongoose.

La aplicación permite:

- Definir los esquemas y modelos `Movie` y `Cinema`.
- Cargar datos iniciales mediante semillas.
- Consultar todas las películas o filtrarlas por identificador, título, género y año.
- Crear, modificar y eliminar películas.
- Consultar los cines junto con la información de las películas que proyectan.
- Controlar los posibles errores de las peticiones.
- Comprobar el funcionamiento de los endpoints mediante Insomnia.

## Tecnologías utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- Insomnia

## Estructura del proyecto

```txt
.
├── evidencias/
│   └── Capturas de las pruebas realizadas con Insomnia
│
├── src/
│   ├── config/
│   │   └── connect.js
│   │
│   ├── controllers/
│   │   ├── cinemas.controllers.js
│   │   └── movies.controllers.js
│   │
│   ├── models/
│   │   ├── cinema.model.js
│   │   └── movie.model.js
│   │
│   ├── routes/
│   │   ├── cinemas.routes.js
│   │   └── movies.routes.js
│   │
│   └── seeds/
│       ├── cinemas.seed.js
│       ├── data.js
│       └── movies.seed.js
│
├── .gitignore
├── index.js
├── package-lock.json
├── package.json
└── README.md
```

## Instalación

Para ejecutar el proyecto es necesario tener instalados Node.js y MongoDB.

Después de descargar o clonar el repositorio, hay que instalar las dependencias desde la carpeta raíz:

```bash
npm install
```

## Carga de datos iniciales

Antes de arrancar el servidor se pueden cargar las películas y los cines mediante el siguiente comando:

```bash
npm run seed
```

Este script ejecuta primero la semilla de películas y después la de cines, ya que los cines necesitan las identificaciones de las películas para crear sus relaciones.

También se pueden ejecutar por separado:

```bash
npm run seed:movies
npm run seed:cinemas
```

Las semillas eliminan los datos anteriores de sus colecciones y vuelven a insertar los datos definidos en el proyecto.

## Arranque del servidor

Para iniciar el proyecto en modo desarrollo:

```bash
npm run dev
```

El servidor se ejecuta en:

```txt
http://localhost:8081
```

El modo de desarrollo utiliza `node --watch`, por lo que el servidor se reinicia automáticamente al guardar cambios.

## Endpoints

### Películas

| Método | Endpoint | Descripción |
| --- | --- | --- |
| `GET` | `/api/movies` | Devuelve todas las películas |
| `GET` | `/api/movies/:id` | Devuelve una película según su `_id` |
| `GET` | `/api/movies/title/:title` | Devuelve las películas que coinciden con un título |
| `GET` | `/api/movies/genre/:genre` | Devuelve las películas de un género |
| `GET` | `/api/movies/year/:year` | Devuelve las películas estrenadas a partir del año indicado |
| `POST` | `/api/movies` | Crea una película |
| `PUT` | `/api/movies/:id` | Modifica una película |
| `DELETE` | `/api/movies/:id` | Elimina una película |

### Cines

| Método | Endpoint | Descripción |
| --- | --- | --- |
| `GET` | `/api/cinemas` | Devuelve los cines y la información de las películas que proyectan |

## Ejemplo de petición

Para crear una película se realiza una petición `POST` a:

```txt
http://localhost:8081/api/movies
```

El cuerpo de la petición debe enviarse como JSON:

```json
{
  "title": "Blade Runner",
  "director": "Ridley Scott",
  "year": 1982,
  "genre": "Ciencia ficción"
}
```

Para consultar una película concreta, editarla o eliminarla, se debe copiar su campo `_id` y añadirlo al final del endpoint correspondiente.

## Evidencias

Las capturas del arranque del servidor y de las peticiones realizadas correctamente con Insomnia se encuentran en la carpeta [`evidencias`](./evidencias/).

## Autor

Guillem Otzet López 
