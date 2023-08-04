# Proyecto final - RollingCode

## Alcance del proyecto 💡

En este proyecto los alumnos en forma grupal se dividirán las tareas necesarias para diseñar una aplicación
para que los clientes de un restaurante elijan entre distintos productos y puedan hacer su pedido.

El alcance de este proyecto se centra en realizar todos los pasos del CRUD y deberá contar con un login con
diferentes opciones dependiendo el usuario que se loguea. Se considera que solo el usuario administrador
podrá administrar las diferentes opciones de menú, mientras que los clientes deberán iniciar su sesión o
registrarse para poder solicitar un pedido.

## Tecnologias / Herramientas 🛠

- [HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [Javascript](https://www.w3schools.com/js/)
- [NodeJs](https://nodejs.org/es)
- [ExpressJs](https://expressjs.com/es/)
- [BabelJs](https://babeljs.io/)
- [Mongoose](https://mongoosejs.com/)
- [Cors](https://github.com/expressjs/cors#readme)
- [Morgan](https://github.com/expressjs/morgan)
- [Express Validator](https://express-validator.github.io/docs)
- [Markdown](https://markdown.es/)

## Link a la API en producción:

- [Vercel](https://yumyum-backend.vercel.app/)

## Pasos para clonar y ejecutar el Servidor 🖥

Sigue estos pasos para clonar y ejecutar el servidor en tu entorno local:

1.  **Requisitos previos:** Asegúrate de tener Node.js instalado en tu sistema. Puedes descargar la versión más reciente desde el sitio web oficial de Node.js (https://nodejs.org).
    Asegúrate también de tener un administrador de paquetes de Node.js instalado, como npm (que se instala junto con Node.js) o Yarn.

2.  **Clona el repositorio:** En tu línea de comandos, ejecuta el siguiente comando para clonar el repositorio:

    ```
    git clone https://github.com/lourdesgarciafyl/PF-yumyum-backend
    ```

3.  **Accede al directorio:** Ve al directorio de la aplicación clonada:

    ```
    cd <PF-yumyum-backend>
    ```

4.  **Instala las dependencias:** Ejecuta el siguiente comando para instalar las dependencias de la aplicación:

    ```
    npm install
    ```

5.  **Inicia el servidor:** Utiliza el siguiente comando para iniciar la aplicación en tu entorno local:

    ```
     npm run dev
    ```

    Esto ejecutará el script definido en el archivo package.json para iniciar el servidor Node.js.

6.  **Accede al servidor:** Abre tu navegador web y visita la siguiente URL: _http://localhost:4010_. El servidor debería cargarse y estar listo para usarse.

- Se recomienda usar [Postman](https://www.postman.com/) para las solicitudes al servidor.

## Llamadas a la API

- VITE_API_PRODUCTO=https://yumyum-backend.vercel.app/apiyumyum/productos
- VITE_API_USUARIO=https://yumyum-backend.vercel.app/apiyumyum/auth
- VITE_API_CATEGORIA=https://yumyum-backend.vercel.app/apiyumyum/categorias
- VITE_API_PEDIDO=https://yumyum-backend.vercel.app/apiyumyum/pedidos

## Variables de entorno
- DATABASE_URI=mongodb+srv://adminYumyum:PeefD0x84Z3aR9Wf@yumyumdb.ukai0yb.mongodb.net/yumyum
- SECRET_JWT=81^pR!jKbx3d51Y40Ab
- YOUR_PUBLIC_KEY=PpCDOOp5Om_fIcrxQ
- YOUR_PRIVATE_KEY=mywdf3cd-V_rjiXc69oc7
- YOUR_SERVICE_ID=service_58bhdtn
- YOUR_TEMPLATE_ID=template_f685fp9

## Métodos :

## Métodos de productos:

| Método | #Url de productos         | #Acción                          |
| ------ | ------------------------- | -------------------------------- |
| POST   | /productos                | Crear nuevo producto             |
| GET    | /productos                | Muestra la lista de productos    |
| PUT    | /productos/:id            | Edita un producto por su id      |
| DELETE | /productos/:id            | Borra un producto por su id      |
| GET    | /productos/:id            | Busca un producto por su id      |
| PUT    | /productos/activar/:id    | Activar un producto por su id    |
| PUT    | /productos/desactivar/:id | Desactivar un producto por su id |

Ejemplo de Body en el envío de Crear producto:

```
{
      "nombreProducto": "Pizza Primavera",
      "precio": 3200,
      "imagen": "https://res.cloudinary.com/dvcq6vatc/image/upload/v1689383714/yumyum/pizzaPrimavera_cl5yyj.png",
      "detalle": "La Pizza Primavera está elaborada con salsa de tomates, jamón, muzarella, tomates al natural, huevo picado y aceitunas.",
      "estado": "Activo",
      "categoria": "Pizza"
}
```

## Métodos de categorias:

| Método | #Url de categoria   | #Acción                        |
| ------ | ------------------- | ------------------------------ |
| POST   | /categorias         | Crear nueva categoria          |
| GET    | /categorias         | Muestra todas las categorias   |
| GET    | /categorias/activas | Muestra las categorias activas |

Ejemplo de Body en crear categoria:

```
{
      "nombreCategoria": "Pizza",
      "estado": "Activo"
}
```

## Métodos de pedidos:

| Método | #Url de pedidos        | #Acción                              |
| ------ | ---------------------- | ------------------------------------ |
| POST   | /pedidos               | Crear nuevo pedido                   |
| GET    | /pedidos               | Muestra la lista de pedidos          |
| PUT    | /pedidos/enproceso/:id | Edita el estado del pedido por su id |
| PUT    | /pedidos/entregado/:id | Edita el estado del pedido por su id |
| GET    | /pedidos/:id           | Muestra un pedido por su id          |

Ejemplo de Body en crear pedido:

```
 {
    "usuario": {
        "nombreUsuario": "José",
        "apellidoUsuario": "Perez",
        "email": "jperez@cliente.com"
    },
    "fechaPedido": "2023-07-26T22:29:01.000Z",
    "productos": [
        {
            "producto": {
                "nombreProducto": "Pizza Muzzarella",
                "precio": 3000,
                "imagen": "https://res.cloudinary.com/dvcq6vatc/image/upload/v1689383714/yumyum/pizzaMuzzarela_rfihh1.png",
                "detalle": "Pizza Muzzarella elaborada con salsa de tomate, muzzarella, aceitunas y orégano",
                "estado": "Activo",
                "categoria": "Pizza"
            },
            "cantidad": 2,
            "subtotalItem": 6000,
            "_id": "64c45b837bd3952422d9eae2"
        },
    ],
    "estado": "En proceso",
    "precioTotal": 6000
}
```

## Métodos de Usuarios:

| Método | #Url de Usuarios        | #Acción                      |
| ------ | ----------------------- | ---------------------------- |
| POST   | /registro               | Registrar un cliente         |
| POST   | /auth/nuevo             | Registrar un administrador   |
| POST   | /auth/login             | Loguear un usuario           |
| POST   | /auth                   | Crear nuevo usuario          |
| GET    | /auth                   | Muestra la lista de usuarios |
| GET    | /auth/:id               | Busca un usuario por su id   |
| PUT    | /auth/nuevopassword/:id | Crear nueva contraseña       |

Ejemplo de Body en el envío de Crear nuevo usuario administrador:

```
   {
      "nombreUsuario": "Juan",
      "apellidoUsuario": "Perez",
      "email": "juanperez@gmail.com",
      "password": "123456aA",
      "estado": "Activo",
      "perfil": "Cliente"
   }
```

Ejemplo de Body en el envío de Crear nuevo usuario cliente:

```
   {
      "nombreUsuario": "Juan",
      "apellidoUsuario": "Perez",
      "email": "juanperez@gmail.com",
      "password": "123456aA"
   }
```

## Repositorio FrontEnd 📌

[FrontEnd YumYum](https://github.com/lourdesgarciafyl/PF-YumYum-frontend)

## Integrantes del grupo :

- [Agustin Baza](https://github.com/agustinbaza).
- [Lourdes Garcia](https://github.com/lourdesgarciafyl).
- [Juan Gerardo Romero Uro](https://github.com/jgromerou).
- [Cristian Quiroga](https://github.com/cristianq3).
