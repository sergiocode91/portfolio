---
title: "Descubre las Deferrable: El Futuro de Angular 17"
createdDate: "2024-04-11T19:02:52.208Z"
description:
  "Descubre cómo las Deferrable Views de Angular 17 pueden acelerar la carga inicial de tu app, optimizando componentes pesados y mejorando métricas críticas de rendimiento."
imageUrl: "/deferrables-view.jpg"
tags: ["astro", "javascript"]
author: "Sergio Rojas"
authorImage: "/avatar.png"
published: true
---
¡Dale un respiro a tu aplicación con las Deferrable Views de Angular 17! Esta función te permite posponer la carga de componentes hasta que sean realmente necesarios. Piénsalo como darle a tu app un "pase exprés" para saltarse la cola de carga inicial, haciendo que la experiencia del usuario sea más fluida desde el primer momento.

## Optimización al Máximo

¿Por qué cargar todo de golpe cuando puedes planificar un encuentro casual? Utiliza @defer para invitar componentes a la fiesta solo cuando el momento es el adecuado. Al hacerlo, reduces el tamaño inicial de tu paquete y mejoras métricas clave como el LCP y el TTFB.

```javascript
@defer {
  <large-component />
}
```

## Más que solo cargar: Manejo de Estados

Las Deferrable Views no solo cargan componentes de forma diferida, también manejan los estados de carga con estilo. Los bloques @defer pueden incluir subbloques para manejar los estados de "carga", "error" y mostrar "placeholders". Esto evita cambios bruscos en la UI que puedan espantar a tus usuarios, similar a cómo evitarías cambios drásticos de iluminación en una fiesta sorpresa.

## Buena Práctica: Evitar desplazamientos de contenido

Es crucial colocar componentes que puedan cambiar la estructura de la página (desplazamientos de contenido) debajo del pliegue. Así, cuando carguen, no interrumpirán la experiencia del usuario, como un DJ que cambia de pista suavemente sin que nadie lo note.

## Requisitos para una carga efectiva

Para que una dependencia dentro de los bloques @defer sea diferible en Angular 17, debe cumplir con ser autónoma y no estar referenciada desde otro lugar fuera del bloque @defer. Esto asegura que la carga diferida sea efectiva y que no se introduzcan dependencias inadvertidas que podrían requerir una carga anticipada, manteniendo así la eficiencia y la efectividad del mecanismo de carga diferida.

## Tipos de Deferrable Views

Angular 17 no solo mejora la eficiencia de carga con el uso de @defer, sino que también ofrece múltiples maneras de manejar diferentes escenarios con Blocks y Triggers. Los Blocks incluyen:

* `@defer`
* `@placeholder`
* `@loading`
* `@error`

Cada uno especializado en manejar distintas fases del proceso de carga.

En cuanto a los Triggers, tenemos: 

* `on idle`
* `on viewport`
* `on interaction`
* `on hover`
* `on immediate`
* `on timer`

Estos permiten controlar el momento exacto de la carga según el contexto del usuario y la interacción con la aplicación.

Para un análisis más detallado de cada uno de estos bloques y disparadores, asegúrate de no perderte mi próximo post, donde exploraremos cómo cada uno puede optimizar aún más tu aplicación en Angular 17.

## Conclusión

Con estas herramientas, Angular 17 te da el control para hacer que tu aplicación sea más eficiente y ágil. Así que, ¿por qué no empezar a implementar estas prácticas hoy y darle a tu app el impulso que necesita?
