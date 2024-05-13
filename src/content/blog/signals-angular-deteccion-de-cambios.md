---
title: "Signals en Angular: El futuro de la detección de cambios"
createdDate: "2024-05-06T19:01:35.334Z"
description: "Explora cómo los Signals en Angular mejoran la detección de cambios, haciendo las aplicaciones más eficientes, responsivas y menos intrusiva."
imageUrl: "/images/signals-angular-deteccion-de-cambios.webp"
tags: ["Angular"]
author: "Sergio Rojas"
authorImage: "/avatar.png"
slug: signals-angular-deteccion-de-cambios
published: false
---
## El Renacimiento de Angular Según Sarah Drasner

¡Hola! Hoy vamos a explorar una innovación emocionante en Angular: los `Signals`. Sarah Drasner, la Directora de Ingeniería en Google, nos ha dado pistas sobre cómo estas novedades están revitalizando Angular, haciendo nuestras aplicaciones más rápidas y responsivas.

En este artículo, exploramos cómo se utilizaron los `Signals` en proyectos Angular, volviéndolos más eficientes y atractivos. ¡Fue una actualización que definitivamente dio un giro a la forma de programar!

## ¿Qué son los Signals?

Piensa en los `Signals` como canales directos que permiten que ciertas partes de tu aplicación respondan a los cambios sin afectar al resto. Es como tener conversaciones privadas en una fiesta ruidosa: solo las personas implicadas necesitan prestar atención.

## Detección de Cambios Hoy: Zone.js

Tradicionalmente, Angular ha usado `Zone.js` para gestionar la actualización de componentes, un método efectivo pero pesado. `Zone.js` monitorea todas las actividades en la aplicación, lo que puede ralentizar el rendimiento a medida que esta crece. Además, presenta varias desventajas:

* **`Monkey Patching:`**

Modifica objetos del navegador de manera impredecible, complicando el diagnóstico de errores.

* **`Sobrecarga:`**

Añade unos 100 KB, un peso considerable para componentes web ligeros.

* **`Limitaciones con Async/Await:`**

Esto fuerza a Angular CLI a convertir async y await en promesas, aunque los navegadores modernos ya las soportan.

* **`Chequeo Ineficiente:`**

Angular revisa todo el árbol de componentes para detectar cambios, lo cual no es eficiente para actualizar componentes específicos.

Los `Signals` solucionan estas desventajas permitiendo a Angular actualizar solo las partes necesarias de manera más eficiente y con menor sobrecarga.

## Cómo Usar Signals en Angular

Si estás utilizando Angular 16 o superior, ya puedes empezar a experimentar con `Signals`. Aquí tienes un ejemplo simple de cómo implementarlos:

```javascript
import { Signal } from '@angular/core';

const count = signal(0); // Inicializa un signal con valor 0
console.log('El contador está en: ' + count()); // Muestra el valor inicial del signal
```

### - Actualizar un Signal

Para cambiar el valor, puedes usar el método `.set()` o `.update()` para modificar el valor basado en su estado anterior.

```javascript
count.set(3); // Establece el valor del signal a 3
count.update(value => value + 1); // Incrementa el valor del signal en 1
```

## Signals Computados

Los `Signals` Computados observan otros `Signals` y actualizan automáticamente su valor en respuesta a los cambios. Son ideales para crear relaciones dinámicas dentro de tu aplicación.

```javascript
const count: WritableSignal<number> = signal(0);
const dobleContador: Signal<number> = computed(() => count() * 2);
```

En este ejemplo, dobleContador depende de count. Cada vez que count se actualiza, dobleContador también se actualizará automáticamente. Esta actualización es perezosa y memoizada, lo que significa que el valor derivado no se recalcula hasta que sea necesario, optimizando el rendimiento.

### - Utilizando Signals Computados

Imagina que quieres mostrar un mensaje solo cuando es relevante:

```javascript
const mostrarContador = signal(false);
const count = signal(0);
const contadorCondicional = computed(() => {
  if (mostrarContador()) {
    return `El contador está en ${count()}.`;
  } else {
    return '¡No hay nada que ver aquí!';
  }
});
```

Este ejemplo ilustra la flexibilidad y eficiencia de los `Signals Computados`. Cuando el Signal **mostrarContador** tiene el valor **false**, el Signal **count** no influye en absoluto, porque ni siquiera se consulta su valor.

Esto significa que si cambias el valor de **count**, no afectará ni desencadenará ninguna actualización en **contadorCondicional**. Así, sólo se recalcula **contadorCondicional** cuando realmente es necesario, evitando trabajo innecesario y mejorando el rendimiento de la aplicación.

## Uso de Signals en Formularios

Aunque ngModel no soporta aún los `Signals` para binding bidireccional, puedes gestionarlo manualmente.

En el formulario de ejemplo, tenemos dos campos de entrada que los usuarios utilizan para introducir las ciudades de origen y destino para una búsqueda de vuelos. Estos campos están gestionados por dos `Signals`, llamados **from** y **to**. Aquí te muestro mejor el ejemplo:

```html
<form>
  <input [ngModel]="from()" (ngModelChange)="from.set($event)">
  <input [ngModel]="to()" (ngModelChange)="to.set($event)">
  <button (click)="search()">Buscar Vuelos</button>
</form>
```

Para cada campo de entrada, vinculamos el valor del `Signal` usando **[ngModel]="from()"**, que devuelve el valor actual.

Al cambiar el valor del campo, **(ngModelChange)="from.set($event)"** actualiza el Signal con el nuevo valor mediante **.set()**, permitiendo que el formulario siga siendo reactivo ante los cambios del usuario, a pesar de las restricciones de ngModel con `Signals`.

## Signals en Effects

Cuando trabajamos con `Signals` en effects, debemos tener cuidado especial para evitar la creación de ciclos indeseados.

Imagina un efecto que lee el Signal **a** y actualiza el Signal **b**, mientras que otro efecto hace lo contrario. Esto podría llevar rápidamente a un ciclo infinito de actualizaciones, algo que queremos evitar a toda costa.

### - Restricciones al Escribir en Signals dentro de Effects

Por defecto, Angular no permite escribir directamente en un Signal dentro de un efecto para prevenir precisamente estos ciclos. Observemos un ejemplo donde intentamos sincronizar dos `Signals`:

```javascript
effect(() => {
  // Intentar escribir en un signal aquí provocará un error
  this.to.set(this.from());
});
```

Este intento resultará en un error específico:

```javascript
ERROR Error: NG0600: Writing to signals is not allowed in a computed or an effect by default. Use allowSignalWrites in the CreateEffectOptions to enable this inside effects.
```

Para situaciones donde realmente necesitas escribir en un `Signal` dentro de un effect, puedes usar la opción **allowSignalWrites** para permitirlo explícitamente:

```javascript
effect(() => {
  this.to.set(this.from());
}, { allowSignalWrites: true });
```

### - Efectos Asincrónicos y Uso Indirecto

Los efectos en Angular no tienen que ser instantáneos. En realidad, podemos hacer que operen en segundo plano, manejando tareas que no requieren una acción inmediata, como cargar datos de manera asíncrona.

```javascript
effect(async () => {
  const flights = await this.flightService.findAsPromise(this.from(), this.to());
  this.flights.set(flights);
});
```

Este código muestra cómo un efecto asincrónico puede mejorar la eficiencia. Usando await, el efecto espera a que se complete una operación, como una búsqueda de vuelos, antes de actualizar un Signal.

Angular maneja estas esperas eficazmente, permitiendo que otras partes de la aplicación continúen siendo rápidas y responsivas. Además, los `Signals` se pueden utilizar de manera más sutil para controlar las actualizaciones sin sobrecargar el sistema, ideal para cuando las acciones menores no deben iniciar procesos más grandes.

### - El Arte del Debouncing con Signals

Imagina que estás desarrollando una barra de búsqueda con autocompletado. Si cada letra ingresada por el usuario desencadenara una búsqueda completa, el sistema se sobrecargaría rápidamente. Para evitar esto, podemos usar `Signals` de manera indirecta para implementar debouncing, optimizando el proceso sin sacrificar la funcionalidad.

```javascript
effect(() => {
  this.search();
});
```

Este Effect espera antes de buscar, permitiendo que el usuario termine de escribir. Esto reduce las búsquedas y evita sobrecargar el sistema.

## Conclusión

¡Y ahí lo tienes! Los `Signals` transforman cómo gestionamos cambios en Angular, haciendo nuestras aplicaciones más eficientes y reactivas. 

Si estás usando Angular 16 o superior, experimenta con esta herramienta innovadora y lleva tus proyectos al próximo nivel. ¡Descubre el poder de los `Signals` y revitaliza tus aplicaciones hoy mismo!
