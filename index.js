//encriptacion

const isLowercaseWithoutAccent = (string) => /^[a-z\s]+$/.test(string);

const encryptMsg = (string, shift) => {
  if (!isLowercaseWithoutAccent(string)) {
    throw new Error(
      'La entrada debe contener sólo letras minúsculas sin acentos'
    );
  }

  if (typeof shift !== 'number' || !Number.isInteger(shift)) {
    throw new Error('Shift debe ser un número entero');
  }

  return [...string]
    .map((char) => {
      const charCode = char.charCodeAt(0);

      if (charCode >= 97 && charCode <= 122) {
        return String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
      } else {
        return char;
      }
    })
    .join('');
};

function decryptMsg(str, shift) {
  if (!isLowercaseWithoutAccent(str)) {
    throw new Error(
      'El mensaje encriptado debe contener solo letras minúsculas sin acentos'
    );
  }

  if (typeof shift !== 'number' || !Number.isInteger(shift)) {
    throw new Error('El shift debe ser un número entero');
  }

  let decryptedStr = '';

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    if (charCode >= 97 && charCode <= 122) {
      decryptedStr += String.fromCharCode(
        ((charCode - 97 - shift + 26) % 26) + 97
      );
    } else {
      decryptedStr += str.charAt(i);
    }
  }
  return decryptedStr;
}

document.addEventListener('DOMContentLoaded', () => {
  const textAreaInput = document.getElementById('textarea-input');
  const encryptButton = document.querySelector('.encrypt-btn');
  const decryptButton = document.querySelector('.decrypt-btn');
  const oldSidebar = document.getElementById('sidebar');
  const newSidebar = document.getElementById('new-sidebar');
  const encryptedMessageElem = newSidebar.querySelector('.encrypted-message');

  encryptButton.addEventListener('click', () => {
    const text = textAreaInput.value;
    const shift = 3;

    try {
      const encryptedMessage = encryptMsg(text, shift);
      encryptedMessageElem.textContent = encryptedMessage;

      oldSidebar.style.display = 'none';
      newSidebar.style.display = 'flex';

      const copyButton = newSidebar.querySelector('.copy-btn');
      copyButton.removeEventListener('click', copyEncryptedMessage); // Eliminar evento anterior
      copyButton.addEventListener('click', copyEncryptedMessage); // Agregar nuevo evento
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  });

  decryptButton.addEventListener('click', () => {
    const text = encryptedMessageElem.textContent; // Obtener el mensaje encriptado
    const shift = 3;

    try {
      const decryptedMessage = decryptMsg(text, shift);
      encryptedMessageElem.textContent = decryptedMessage; // Mostrar el mensaje desencriptado

      oldSidebar.style.display = 'none';
      newSidebar.style.display = 'flex';

      const copyButton = newSidebar.querySelector('.copy-btn');
      copyButton.removeEventListener('click', copyEncryptedMessage); // Eliminar evento anterior
      copyButton.addEventListener('click', copyDecryptedMessage); // Agregar nuevo evento
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  });

  function copyEncryptedMessage() {
    const encryptedMessage = encryptedMessageElem.textContent;
    navigator.clipboard
      .writeText(encryptedMessage)
      .then(() => {
        alert('Mensaje Encriptado Copiado con éxito');
      })
      .catch((err) => {
        console.error('Error al copiar el mensaje encriptado', err);
      });
  }

  function copyDecryptedMessage() {
    const decryptedMessage = encryptedMessageElem.textContent;
    navigator.clipboard
      .writeText(decryptedMessage)
      .then(() => {
        alert('Mensaje Desencriptado Copiado con éxito');
      })
      .catch((err) => {
        console.error('Error al copiar el mensaje desencriptado', err);
      });
  }
});
