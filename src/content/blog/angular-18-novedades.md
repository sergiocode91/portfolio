---
title: "¡Angular v18 ya está disponible!"
createdDate: "2024-05-23T19:01:35.334Z"
description:
  "¡Angular 18 ha llegado con mejoras y nuevas funcionalidades! Descubre cómo esta versión optimiza tu desarrollo web con signals avanzados, detección de cambios híbrida y más."
imageUrl: "/images/angular-18-novedades.webp"
tags: ["Angular"]
author: "Sergio Rojas"
authorImage: "/avatar.png"
slug: angular-18-novedades
published: true
---

Angular 18 ha sido lanzado, y viene cargado de mejoras y sorpresas que no querrás perderte. Si te gustaron las actualizaciones de versiones anteriores, prepárate porque esta versión lleva la experiencia de desarrollo al siguiente nivel. Vamos a explorar juntos lo que trae de nuevo Angular 18.

## Colaboración entre Angular y Wiz

Una de las mayores sorpresas de este año en el `ng-conf`, la conferencia más grande de Angular, fue la presentación de la colaboración entre los equipos de Angular y Wiz. ¿Te suena Wiz? Es el framework interno de Google utilizado para crear aplicaciones críticas en rendimiento como Google Search, Google Photos, y YouTube. La colaboración promete fusionar lo mejor de ambos mundos, mejorando la experiencia de desarrollo y optimizando las aplicaciones.

## Signals y la Transición a un Modo Sin Zoneless

Desde Angular 16, los signals han estado haciendo ruido, y en Angular 18, se integran aún más profundamente en el núcleo del framework. Con la promesa de una transición completa a un modo sin zoneless, los signals se vuelven una herramienta estable y poderosa. Adiós al decorador `@Input()` y hola a la nueva función `input()`, que ofrece inputs opcionales y requeridos con una sintaxis más limpia y segura.

```javascript
@Component(...)
export class MiComponente {
  optionalInput = input<number>();
  optionalInputWithDefaultValue = input<number>(5);
  requiredInput = input.required<number>(); 
}
```

## Model: La Evolución de los Inputs

¿Y si te dijera que ahora puedes modificar los valores de tus inputs directamente? Con la nueva función `model()`, Angular permite la creación de señales modificables, facilitando el binding bidireccional de manera intuitiva.

```javascript
@Component(...)
export class MyComponent {
  myModel = model(false);
  toggle(): void {
    this.myModel.set(!this.myModel());
  }
}
```

## Consultas de Señales

Las consultas de señales también han evolucionado. Con las nuevas funciones `viewChild()`, `viewChildren()`, `contentChild()` y `contentChildren()`, puedes obtener referencias a elementos DOM y componentes de manera más eficiente y flexible.

```javascript
@Component(...)
export class MyComponent {
  divEl = viewChild<ElementRef>('el');
  cmp = viewChild(ChildComponent);
}
```

## Mejoras en los Outputs

Angular 18 también trae mejoras para los outputs con la función output(), que ahora ofrece una sintaxis más coherente y segura, reemplazando al EventEmitter.

```javascript
@Component(...)
export class MiComponente {
  valorCambiado = output<string>();
  onValueChanged(msg: string): void {
    this.valorCambiado.emit(msg);
  }
}
```

## Fallback en ng-content

¿Cuántas veces has deseado tener un contenido por defecto cuando no se pasa ningún contenido a un ng-content? ¡Ahora es posible! Con Angular 18, puedes definir un contenido de fallback fácilmente.

```html
<ng-content select="header">Cabecera por defecto</ng-content>
<ng-content select="footer">Pie de página por defecto</ng-content>
```

## Nuevo Observable en Formularios

Reactive Forms recibe una mejora con el nuevo Observable events, que combina los eventos `valueChanges` y `statusChanges`, añadiendo nuevos eventos como `PristineChangeEvent` y `TouchedChangeEvent`.

## Detección de Cambios Híbrida

Angular 18 introduce la detección de cambios sin Zone.js de manera experimental, mejorando la performance y la experiencia del desarrollador. Con solo un par de modificaciones, puedes habilitar esta nueva característica y probar sus beneficios.

```javascript
bootstrapApplication(AppComponent, {
  providers: [
    provideExperimentalZonelessChangeDetection(),
  ],
});
```

## Conclusión

Angular 18 no solo mejora la funcionalidad existente, sino que también abre nuevas posibilidades para el desarrollo de aplicaciones web. ¿Qué esperas para probarlo y compartir tus experiencias? 

¡Feliz codificación! 🎉

Si te gustó este artículo, no olvides compartirlo en tus redes sociales y sigue explorando las maravillas de Angular.