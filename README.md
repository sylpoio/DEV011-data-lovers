# Data Lovers

## Índice

* [1. Definición del producto](#1-definición-del-producto)
* [2. Historias de usuario](#2-historias-de-usuario)
* [3. Diseño de la interfaz de usuario](#3-diseño-de-interfaz-de-usuario)
* [4. Testeos de usabilidad](#-testeos-de-usabilidad)

## 1. Definición del producto
Nuestro sitio web permite a los usuarios acceder a la información de las diferentes animaciones de Studios Ghibli de una forma amigable y dinámica. 

Los usuarios pueden filtrar la información según sus intereses e ir más a fondo al entrar a cada película. 

## 2. Historias de usuario
1. Primera historia de usuario/: cuerpo de la página
    * Descripción
        Personas interesadas en las películas de Studios Ghibli
        Conocer la cinematografía de Ghibli
        Ver todas las películas que tiene Ghibli
        Cuando utilizan el producto quieren poder ver todos los títulos con sus portadas
        COMO: como usuario de la página
        QUIERO: Ver los títulos de las animaciones y sus portadas
        PARA: Saber cuáles son

    * Tareas
        Crear el HTML
        Identificar las partes del body, etiquetar
        Imágenes: elegir si serán extraídas de otra página o cargadas en la interfaz
        Dar diseño con CSS usando flexbox para responsive format
        Jalar la data dinámicamente con JS

    * Criterios de aceptación
        El usuario puede de forma pública acceder al sitio.
        El usuario puede visualizar las portadas de las películas
        El usuario puede ver le nombre de las películas
        El sitio es agradable a la vista
        El sitio se adapta a cualquier pantalla

    * Definición de terminado
        El código cumple con la guía de estilos acordada
        La historia ha sido testeada por lo menos por 2 usuarios
        El código está en el repositorio
        El código pasa los test
        El código ha sido hecho en pair-programming y alguien le hizo code-riview

2. Segunda historia de usuario: informacion general de las peliculas
    * Descripción
        Personas interesadas en las películas de Studios Ghibli
        Conocer la cinematografía de Ghibli
        Dato más relevante que quieren información de la animación
        Cuando utilizan el producto quieren poder ver detalles de las animaciones
        COMO: como usuario de la página
        QUIERO: Ver la información de año, locación, productor, director, descripción y personajes principales
        PARA: Saber los detalles y poder elegir una animación para ver

    * Tareas
        Crear las tarjetas en HTML
        Dar estilo a las tarjetas en CSS
        Agregar toda la data informativa en las tarjetas
        Crear el overlay
        Crear la segunda hoja info.html

    * Criterios de aceptación
        El usuario puede ver los criterios de año, locación, productor, director, descripción y personajes principales
        El usuario puede visualizar la información anterior al dar click en la tarjeta seleccionada
        El usuario puede visualizar la información de varias películas a la vez pasando el mouse por las tarjetas
        El usuario puede ver la información de personajes, vehículos y locaciones en una pantalla al dar click a la tarjeta

    * Definición de terminado
        El código cumple con la guía de estilos acordada
        El código está en el repositorio
        El código pasa los test
        El código ha sido hecho en pair-programming y alguien le hizo code-riview
        La historia ha sido testeada por lo menos por 2 usuarios

3. Tercera historia de usuario: creacion de filtros
    * Descripción
        Personas interesadas en las películas de Studios Ghibli
        Conocer la cinematografía de Ghibli
        Datos más relevantes que quieren ver es filtros para los detalles
        Cuando utilizan el producto quieren poder filtrar por detalles
        COMO: como usuario de la página
        QUIERO: Filtro para ordenar por detalle (año, productor, locación, etc.)
        PARA: Poder ordenar según sus gustos

    * Tareas
        Crear la función de filtrado
        Darle funcionalidad a los selects

    * Criterios de aceptación
        El usuario puede filtrar la información según sus necesidades
        El usuario puede usar más de un filtro a la vez

    * Definición de terminado
        El código cumple con la guía de estilos acordada
        El código está en el repositorio
        El código pasa los test
        El código ha sido hecho en pair-programming y alguien le hizo code-riview
        La historia ha sido testeada por lo menos por 2 usuarios

4. Cuarta historia de usuario: informacion de los personajes de cada pelicula
    * Descripción
        Personas interesadas en las películas de Studios Ghibli
        Conocer la cinematografía de Ghibli
        Dato más relevante que quieren información sobre los personajes
        Cuando utilizan el producto quieren poder ver detalles de los personajes (nacionalidad, edad, género, etc.)
        COMO: como usuario de la página
        QUIERO: Ver tarjetas con detalles de personajes
        PARA: Saber quiénes son

    * Tareas
        Crear las tarjetas de los personajes en HTML
        Dar formato a las tarjetas en CSS
        Imágenes: elegir si serán extraídas de otra página o cargadas en la interfaz
        Crear link en las tarjetas de información para ir a las tarjetas de personajes

    * Criterios de aceptación
        El usuario puede acceder desde la tarjeta de información a las tarjetas de personajes
        El usuario puede visualizar la información de los personajes

    * Definición de terminado
        El código cumple con la guía de estilos acordada
        El código está en el repositorio
        El código pasa los test
        El código ha sido hecho en pair-programming y alguien le hizo code-riview
        La historia ha sido testeada por lo menos por 2 usuarios

5. Quinta historia de usuario: estadisticas generales de las peliculas
    * Descripción
        Personas interesadas en las películas de Studios Ghibli
        Conocer la cinematografía de Ghibli
        Dato más relevante que quieren: información estadística de las películas
        Cuando utilizan el producto quieren poder ver detalles de cuántas películas se desarrollan en una locación o dirigió el mismo director
        COMO: como usuario de la página
        QUIERO: Ver estadística de películas que se desarrollan en una locación o dirigió el mismo director
        PARA: Saber tendencias

    * Tareas
        Crear el HTML
        Crear el diseño CSS
        Agregar el dato dinámico de conteo de películas
        Crear la función para el dato cambie en cada filtro

    * Criterios de aceptación
        El usuario puede de ver el conteo de películas
        El usuario puede visualizar el conteo al filtrar dinámicamente

    * Definición de terminado
        El código cumple con la guía de estilos acordada
        El código está en el repositorio
        El código pasa los test
        El código ha sido hecho en pair-programming y alguien le hizo code-riview
        La historia ha sido testeada por lo menos por 2 usuarios


## 3. Diseño de la Interfaz de Usuario
* Prototipos de baja fidelidad
   ![prototipo de baja idelidad](https://github.com/ramatis12/DEV011-data-lovers/blob/main/src/images/ProtipoTarjetas.png)
    https://github.com/ramatis12/DEV011-data-lovers/main/src/images/PrototipoWeb.jpg
    

* Prototipo de alta fidelidad
    https://www.figma.com/file/bZIv7OtI8FI1I7Gj0nJ31y/Studio-Ghibli?type=whiteboard&node-id=0-1&t=1QKWkoXXPV8jUBr2-0

## 4. Testeos de usabilidad
* Diseño 
    La imagen de fondo daba la sensación de pixeleado, se cambió la imagen del background para evitar esa sensación 
    Las letras originales se veían muy pequeñas, se cambió el tamaño
    Había poco contraste con el overlay, se colocó un fondo más sólido
    El hover parecía que no funcionaría en el celular, se testeo y funciona al hacer tap
   
* Interacción
    El responsive dejó de funcionar y no se ajustaba a las diferentes pantallas, se solucionó en el último sprint y ahora funciona
    Al principio se agregó toda la información en la misma página y se saturaba la pantalla, se agregó una hoja por película con la información de personajes, vehículos y locaciones para evitar esta saturación
    Se detectó que el hover y el menú no eran tan intuitivos como pensabamos, se agregaron instrucciones
