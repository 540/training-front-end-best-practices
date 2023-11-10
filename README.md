# Buenas prácticas de desarrollo de aplicaciones front-end

## Descripción del curso

¿Por qué cuando trabajamos en aplicaciones backend tenemos muy interiorizados una serie de principios y buenas prácticas de desarrollo de software y **cuando trabajamos en el frontend nos olvidamos de todo esto y sólo nos importa “hacer lo que sea pero que funcione” o elegir el último framework de Javascript**?

En este curso os contaremos las bases y las buenas prácticas necesarias para construir aplicaciones frontend reactivas, agnósticas del framework que utilicemos (React, NextJS, Vue, Svelte, Angular, React Native, Lit elements) y lo más importante, **aplicaciones en las que trabajar no sea un deporte de riesgo y que sean fáciles de mantener y evolucionar.**

Si vienes a este curso con el objetivo de profundizar únicamente en lo tecnológico y en aprender las características más novedosas del framework de turno, es mejor que te ahorres el dinero y busques en Udemy un curso mucho más barato y enfocado a ese propósito. **Este curso no va de aprender solo tecnología, va de aprender a utilizar bien la tecnología.**

Aprenderás sobre sistemas de diseño, ui-kits, vistas desacopladas, arquitectura hexagonal, estado local y global, gestión de errores, testing en frontend, cómo aislarnos del API y **muchos conceptos más con el objetivo de que te ayude a trabajar de manera más productiva y sostenible en proyectos frontend que se complican a medida que avanza el tiempo y crecen.**

## Este curso es para ti si…

- Eres una persona a la que en su día a día le toca desarrollar en el frontend y nunca se ha parado a profundizar en cómo hacer las cosas bien. El frontend siempre es lo último y cada vez que te metes con ello te sientes tirando líneas de código jugando al prueba y error.
- Consideras que ya controlas un framework de desarrollo frontend, conoces sus características y sabes salir del paso pero no sabes cómo plantear una arquitectura sólida, fácil de mantener y sobre la que poder escalar sin morir en el intento.
- No sabes cómo plantear una buena estrategia de testing adaptada a tu contexto concreto y a las necesidades de tu aplicación.
- No solo te gusta programar y también te preocupa el impacto que tus decisiones tienen en el negocio.
- En los cursos te gusta mancharte de barro y no quieres quedarte solo en aprender los conocimientos teóricos. Quieres poder poner en práctica en el propio curso lo aprendido y poder aplicarlo inmediatamente después en tu día a día.

## Lo que hay que hacer
Este repositorio es una aplicación front-end que cualquier asistente al curso podría haber hecho. Vamos a iterar sobre ella y a aplicar las buenas prácticas que vayamos aprendiendo en el curso.  

### ¿Qué hace la aplicación?
Es una aplicación que muestra el catálogo de la floristería Dulces Pétalos.  
La aplicación tiene dos vistas:
- Home: listado de productos.
- Detail: detalle de un producto.

**Listado de productos**

- En esta página se visualizan todos los productos que devuelve la petición al API.
- Permite hacer un filtrado de los productos, en función del criterio de búsqueda introducido por el usuario.
- Al seleccionar un producto, permite navegar al detalle de este.
- Se muestra un máximo de cuatro elementos por fila. Se adapta a la resolución del dispositivo.

**Detalle de producto**
- En esta página se visualizarán los detalles de un producto. 
  - Imagen del producto
  - Descripción del producto
- Permite volver atrás en la navegación.

# Definición de API

URL base

`https://dulces-petalos.herokuapp.com`


## Listado de productos


    GET /api/product

    Response:

    [

      {

        "id": Identificador,

        "name": Nombre común,

        "binomialName": Nombre científico,

        "price": Precio en euros,

        "imgUrl": Url de la imagen,

        "wateringsPerWeek": Riegos por semana,

        "fertilizerType": Tipo de fertilizante. Puede tener dos valores: “nitrogen” (nitrogenado) o “phosphorus” (fosforado),

        "heightInCm": Altura en centímetros

      },

      ...

    ]


## Detalle de un producto

PATH

    GET /api/product/:id

    Response:

    {

        "id": Identificador,

        "name": Nombre común,

        "binomialName": Nombre científico,

        "price": Precio en euros,

        "imgUrl": Url de la imagen,

        "wateringsPerWeek": Riegos por semana,

        "fertilizerType": Tipo de fertilizante. Puede tener dos valores: “nitrogen” (nitrogenado) o “phosphorus” (fosforado),

        "heightInCm": Altura en centímetros

      }


## Contenidos

- Introducción a la web y a los diferentes enfoques de desarrollo.
- Exprimiendo ES6 y TypeScript: buenas prácticas y programación funcional.
- Introducción a los frameworks reactivos y patrones comunes:
    - Flujo de datos.
    - Componentes: fundamentos esenciales y organización.
    - Reutilización de componentes y lógica de vista.
    - Estado.
    - Callbacks.
    - Naming.
- Frameworks para la creación de aplicaciones frontend: Create React App, NextJS, Vue CLI, Vite, Svelte Kit, etc.
- Sistema de diseño y componentes.
    - Sistema de diseño vs ui-kit.
    - ITCSS y Atomic design.
    - Diseño por componentes y ui-kit. Estrategia de evolución del ui-kit.
    - Storybook.
    - Estilado de componentes.
- Convenciones, estándar de código y automatización: ESLint, Prettier, Git Hooks.
- Fetching de datos.
- Arquitectura para desarrollar aplicaciones frontend sólidas y mantenibles:
    - Arquitectura de vistas desacopladas y componentes: manejo de estado, interacción vista/modelo.
    - Arquitectura hexagonal: separación del core de la aplicación de la infraestructura.
    - Estructura de carpetas.
- Testing: guideline (unitarios, integración y end-to-end) y herramientas.
- Gestión de estado: estado local, global, persistencia de datos locales en storage y URL.
- Sistema de navegación.
- Manejo de errores.
- Gestión y validación avanzada de formularios.
- Gestión de traducciones
- Monitorización y seguimiento de errores con herramientas como Sentry.
- Analítica
- Optimización del rendimiento.
- Bibliotecas para facilitar la experiencia de desarrollo: lodash, day,js, moment.js, etc.
