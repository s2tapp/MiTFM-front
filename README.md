# TuVozATexto (Aplicación Web)

Este proyecto es una aplicación web desarrollada utilizando Angular. Proporciona una interfaz de usuario para convertir grabaciones de voz en texto utilizando varias tecnologías de transcripción (Whisper y Wav2vec).

## Instalación

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona este repositorio en tu máquina local usando `https://github.com/uva2023/MiTFM-front.git`
2. Navega al directorio del proyecto: `cd MiTFMFront`
3. **Asegúrate de tener Node.js instalado en tu sistema. Puedes descargarlo desde [aquí](https://nodejs.org/).**
4. Instala las dependencias de Node.js utilizando npm (Node Package Manager):

```bash
npm install
```

**Nota:** Si necesitas una lista detallada de las dependencias instaladas, puedes encontrarlas en el archivo `package.json`.

Estas son las dependencias que se utilizan en el proyecto:

1. **deep-equal**@^2.2.3: Una biblioteca que proporciona una función para comparar objetos de forma profunda.
2. **parchment**@^3.0.0: Una biblioteca de formato de texto rico utilizada en la aplicación.
3. **primeflex**@^3.3.1: Un conjunto de clases de utilidad CSS para diseño y alineación flexbox.
4. **primeicons**@^7.0.0: Iconos de PrimeNG utilizados en la interfaz de usuario.
5. **primeng**@~17.16.1: La biblioteca de componentes de PrimeNG utilizada para construir la interfaz de usuario.
6. **quill**@^1.3.7: Un editor de texto rico utilizado en la aplicación.
7. **rxjs**@~7.8.1: Una biblioteca para programación reactiva utilizada para trabajar con flujos de datos asincrónicos.
8. **tslib**@^2.6.2: Una biblioteca de soporte para TypeScript.
9. **zone.js**@~0.14.6: Una biblioteca que implementa el sistema de cambio de detección de Angular.

**Nota:** Para que la funcionalidad de transcripción funcione correctamente, primero debes levantar los proyectos MiTFM-back y MiTFM-trans. Puedes encontrarlos en los siguientes repositorios:

- [MiTFM-back](https://github.com/uva2023/MiTFM-back)
- [MiTFM-trans](https://github.com/uva2023/MiTFM-trans)

## Uso

- Sube un archivo de audio.
- Selecciona una tecnología de transcripción (por ejemplo, Whisper o Wav2vec).
- Haz clic en el botón "Procesar" para iniciar el proceso de transcripción.
- Una vez completada la transcripción, el texto se mostrará en el editor de texto junto con el tiempo de procesamiento y la confianza de la transcripción.

## Estructura del Proyecto

- `src/`: Contiene el código fuente de la aplicación Angular.
  - `app/`: Contiene componentes, servicios y otros módulos Angular.
  - `assets/`: Contiene activos estáticos como imágenes, archivos de audio, etc.
  - `environments/`: Contiene archivos de configuración específicos del entorno.

## Scripts Disponibles

- `ng serve`: Ejecuta el servidor de desarrollo.
- `ng build`: Construye el proyecto. Los artefactos construidos se almacenarán en el directorio `dist/`.
- `ng test`: Ejecuta pruebas unitarias utilizando Karma.
- `ng e2e`: Ejecuta pruebas de extremo a extremo.

Para obtener más información sobre los comandos de Angular CLI, ejecuta `ng help` o visita la página [Angular CLI Overview and Command Reference](https://angular.io/cli).

## Acceso a la Aplicación Web

Una vez que el servidor esté en funcionamiento, puedes acceder a la aplicación web a través de la siguiente URL en tu navegador: [http://localhost:4200/](http://localhost:4200/)

## Contribuir

Siéntete libre de abrir un issue o enviar un pull request con cualquier mejora o corrección.

## Licencia

Este proyecto está licenciado bajo la Haz_con_ello_lo_que_quieras_pero_no_me_marees License.
