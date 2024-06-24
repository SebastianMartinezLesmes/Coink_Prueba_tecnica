# Instalación

1. Descarga Node.js: Visita el sitio web de Node.js (https://nodejs.org/)

para verficar la instalación, ejecute en su terminal:
- node -v
- npm -v

2. Instala Ionic CLI: Una vez que tengas Node.js y npm instalados, ejecuta el siguiente comando en tu terminal
- npm install -g @ionic/cli

para verficar la instalación, ejecute en su terminal:
 - ionic --version

3. android estudio:

# Proyectos en ionic

1. ## Crear un proyecto
- ionic start nombre-de-tu-proyecto blank

2. ## Entrar al directorio del proyecto 
- cd nombre-de-tu-proyecto

3. ## Instalar las depedencias 
- npm i

4. ## Ejecutar el programa (local)
- ionic serve

# Crear entornode pruebas mobil

1. instalar capacitor
- npm install @capacitor/core @capacitor/cli

2. Inicializar capacitor
- npx cap init

3. Agregar plataforma de desarrollo

### plataforma Android:
- npx cap add android

### plataforma iOS con:
- npx cap add ios

# Construir la apk
### Construcción de la APK

1. Generar la Build de Producción:
- ionic build --prod

2. Actualiza Capacitor:
- npx cap copy

3. Compila y Construye la APK
- npx cap open android
esto abrira el proyecto en android studio 

4. Construye la APK en Android Studio:
En Android Studio, selecciona Build en la barra de menú.
Luego selecciona Build Bundle(s) / APK(s) y elige Build APK(s)

5. Ubica la APK generada: Después de que Android Studio termine de compilar la APK, podrás encontrarla en el directorio 
- android/app/build/outputs/apk/debug/ o android/app/build/outputs/apk/release/
Dependiendo de si estás construyendo para debug o release.

# Instalación y Distribución
1. Instalación en Dispositivos: Una vez que tengas la APK generada, puedes instalarla en dispositivos Android para pruebas. Puedes hacerlo conectando el dispositivo a tu computadora y arrastrando la APK al dispositivo, o utilizando adb (Android Debug Bridge).

# Construir la apk (Alternative)

1. ionic build
2. ionic capacitor add android
3. ionic capacitor copy android
4. cd android
5. ./gradlew assembleDebug
6. cd..