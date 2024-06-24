# Instalación

1. Descarga Node.js: Visita el sitio web de [Node.js](https://nodejs.org/)

para verficar la instalación, ejecute en su terminal:
```
node -v
npm -v
```

2. Instala Ionic CLI: Una vez que tengas Node.js y npm instalados, ejecuta el siguiente comando en tu terminal
```
npm install -g @ionic/cli
```

para verficar la instalación, ejecute en su terminal:
```
ionic --version
```

3. instala [android estudio](https://www.bing.com/search?pglt=675&q=android+studio&cvid=1925a610dc0841efb82ac5287a4fd9aa&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPNIBCTQzODg2ajBqMagCALACAA&FORM=ANNTA1&PC=U531):

# Proyectos en ionic

1. ## Crear un proyecto
```
ionic start nombre-de-tu-proyecto blank
```

2. ## Entrar al directorio del proyecto 
```
cd nombre-de-tu-proyecto
```

3. ## Instalar las depedencias 
```
npm i
```

4. ## Ejecutar el programa (local)
```
ionic serve
```

# Crear entornode pruebas móvil

1. instalar capacitor
```
npm install @capacitor/core @capacitor/cli
```

2. Inicializar capacitor
```
npx cap init
```

3. Agregar plataforma de desarrollo

## plataforma Android:
```
npx cap add android
```
esto generara un gradlew version (AGP 8.2.1)

# Construir la apk

1. ## Construir el proyecto
```
ionic build
```
2. ## Generar el entorno android
```
ionic cap add android
``` 
```
npx cap add android
```
3. ## Abrir el proyecto en Android studio
```
ionic cap open android
```
```
npx cap open android
```

4. En el menu superior, dar clic en "Build"
5. selecciona la opcion: "generar APK"


# Notas

1. El proyecto se diseño en base al [modelo suministrado](https://xd.adobe.com/view/2e4efd9b-575d-4d3d-9753-0fbb3eb3e2f9-7b1d/) y a los requisitos.
2. El consumo de las API's:
- La API de [tipos de documento](https://api.bancoink.biz/qa/signup/documentTypes?apiKey=030106) solo maneja 2 tipos de documento, mientras que en el diseño se requieren 3 tipos. Por este motivo, se ha dejado el espacio donde se consume la API con los 2 modelos y se ha dejado comentado el modelo que solicita los 3 tipos según el diseño.
- La [segunda ruta](https://api.bancoink.biz/qa/signup/genders?apiKey=030106), que presumiblemente está destinada para los géneros, no se utilizó debido a que solo muestra un registro y no proporciona información relevante.
3. la generación de la APK depende del entorno Android Studio.
