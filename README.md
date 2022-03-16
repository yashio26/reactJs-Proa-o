# DBDSTORE
Mi nombre es Dario Proaño y este es mi proyecto final, en ReactJS, que cursé a lo largo de 3 meses. Trata sobre DBDStore, un e-commerce de cosmeticos para un videojuego.

## El e-commerce cuenta con el header, que te lleva al inicio, y una barra de navegación, que permite navegar a 6 secciones:
-Inicio.
-Personajes.
-Skins.
-Celulas.
-Sobre nosotros.
-Carrito (Esta pestaña aparece en caso de que hayamos agregado algo al carrito).

## INICIO
En inicio se van a encontrar todos los productos disponibles.

## PERSONAJES, SKINS Y CELULAS
En estas secciones se van a encontrar los items que pertenezcan a cada categoria, como lo indica el nombre de cada sección.

## SOBRE NOSOTROS
Acá se va a encontrar información sobre el e-commerce, el juego, y además un formulario de contacto, en caso de que quiera consultar algo.

## CARRITO
En el carrito se van a encontrar todos los items que uno haya agregado. En cada producto se va a mostrar la imagen, el nombre, el precio y la cantidad que tiene en el carrito.
También va a mostrarse el precio total de todos los productos agregadoos, y se podrá gestionar el carrito, ya sea eliminando cierto producto, vaciando todo el carrito, o terminando la compra, donde se te pediran tus datos. Además, vas a poder seguir agregando productos ya que cuenta con un botón para eso.
En caso de que no haya ningun producto, se mostrará una frase con un botón para ir al inicio.

## Terminando la compra
Despues de elegir los productos del carrito, se te pedirán los datos. Cada dato es esencial, así que no vas a poder mandar el formulario sin haber completado cada uno de los datos. Luego de terminar, se te dará el número de orden con la reserva hecha.

# ¿Cómo comprar?
Una vez el usuario se encuentre en la página, puede navegar por ella y clickear cualquier producto que sea de su interés, dentro de ese producto, se mostrará la descripcion, el stock, y la cantidad a comprar en caso de que asi lo quiera. Una vez elegida la cantidad, se mostrará el carrito. El usuario puede seguir agregando productos hasta que esté decidido a comprar. Una vez que esté conforme con los productos del carrito, le da a 'Terminar mi compra'. Se va a mostrar un formulario donde se te pedirán los datos. Cada dato es esencial, así que no vas a poder mandar el formulario sin haber completado cada uno de los datos. Luego de terminar, se entregará al usuario el número de orden con la reserva hecha.

# Firebase
Se utilizó firebase para almacenar  las imagenes, y los datos que se envien. Se podrán enviar dos tipos de datos: los datos de la compra, y el formulario de contacto.
## Datos de la compra
En caso de los datos de la compra, llegarán los productos, el formulario con sus datos, la fecha de compra junto con la hora, y el precio final. Además, se va a actualizar el stock, dependiendo de la cantidad que se haya comprado.
## Datos de formulario
En caso de los datos del formulario, llegará el nombre, el email, y una descripción de lo que quiera consultar.

# LocalStorage
Se utilizó LocalStorage para guardar el carrito en caso de que se refresque la página, evitando así volver a elegir cada uno de los productos con su respectiva cantidad.

# Error 404
En caso de que se quiera acceder a una sección que no existe, se va a hacer uso de esta vista para notificarle al usuario y llevarla al inicio.

# FontAwesome
Se utilizó FontAwesome para obtener iconos y complementar el estilo de la página.

# React-Router-Dom
Se utilizó React-Router-Dom para poder navegar mediante rutas en la página.

# Material UI
Se utilizó MUI para mejorar algunos estilos y que quede mucho más lindo el diseño.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
