# Proyecto de Encriptación y Desencriptación de Mensajes

## Descripción

Este proyecto es una aplicación web que permite a los usuarios encriptar y desencriptar mensajes de texto utilizando un cifrado de desplazamiento (Cifrado César). La aplicación está diseñada con una interfaz amigable y responsiva, asegurando que funcione bien en dispositivos móviles, tabletas y computadoras de escritorio.

## Funcionalidades

### Encriptación
- Los usuarios pueden ingresar un mensaje de texto en minúsculas sin acentos.
- Al presionar el botón "Encriptar", el mensaje se encripta utilizando un cifrado de desplazamiento.
- El mensaje encriptado se muestra en un área dedicada en la interfaz.

### Desencriptación
- Los usuarios pueden ingresar un mensaje encriptado.
- Al presionar el botón "Desencriptar", el mensaje se desencripta y se muestra en la interfaz.

### Copiar al Portapapeles
- Los usuarios pueden copiar el mensaje encriptado o desencriptado al portapapeles con un solo clic.
- Mensaje de confirmación se muestra después de una copia exitosa.

### Interfaz Responsiva
- La aplicación está diseñada para adaptarse a diferentes tamaños de pantalla, incluyendo móviles, tabletas y computadoras de escritorio.
- Los elementos de la interfaz se centran adecuadamente en dispositivos de tamaño tablet para mejorar la experiencia del usuario.

## Tecnologías Utilizadas
- **HTML5**: Estructura de la aplicación.
- **CSS3**: Estilos y diseño responsivo utilizando flexbox y media queries.
- **JavaScript**: Lógica de encriptación, desencriptación y manipulación del DOM.

## Estructura del Proyecto
├── index.html # Estructura principal del HTML
├── styles.css # Estilos CSS para la interfaz
└── script.js # Lógica de encriptación/desencriptación y manipulación del DOM

## Cómo Ejecutar el Proyecto

1. Clona este repositorio en tu máquina local:
    ```bash
    git clone https://github.com/tu_usuario/tu_repositorio.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd tu_repositorio
    ```

3. Abre el archivo `index.html` en tu navegador preferido:
    ```bash
    open index.html
    ```

## Uso

1. **Encriptar un Mensaje:**
   - Ingresa el mensaje en minúsculas sin acentos en el área de texto.
   - Haz clic en el botón "Encriptar".
   - El mensaje encriptado aparecerá en la sección dedicada.

2. **Desencriptar un Mensaje:**
   - Ingresa el mensaje encriptado en el área de texto.
   - Haz clic en el botón "Desencriptar".
   - El mensaje desencriptado aparecerá en la sección dedicada.

3. **Copiar el Mensaje:**
   - Haz clic en el botón "Copiar" debajo del mensaje encriptado o desencriptado.
   - Un mensaje de confirmación se mostrará al copiar con éxito.

