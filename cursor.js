// // Criar cursor personalizado
// const customCursor = document.createElement('div');
// customCursor.style.position = 'fixed';
// customCursor.style.zIndex = '9999';
// customCursor.style.pointerEvents = 'none';
// customCursor.style.width = '50px';
// customCursor.style.height = '50px';
// customCursor.style.backgroundImage = 'url(./cursor.svg)';
// customCursor.style.backgroundSize = 'cover';
// document.body.appendChild(customCursor);

// // Inicialmente, ocultar o cursor
// customCursor.style.display = 'none';

// // Eventos para ratón
// document.addEventListener('mousemove', (e) => {
//   customCursor.style.display = 'block';
//   customCursor.style.left = `${e.clientX}px`;
//   customCursor.style.top = `${e.clientY}px`;
// });

// // Eventos para táctil
// document.addEventListener('touchmove', (e) => {
//   const touch = e.touches[0];
//   customCursor.style.display = 'block';
//   customCursor.style.left = `${touch.clientX}px`;
//   customCursor.style.top = `${touch.clientY}px`;
// });

// // Eventos para entrada e saída do mouse da página
// document.addEventListener('mouseleave', () => {
//   customCursor.style.display = 'none';
// });
// document.addEventListener('mouseenter', () => {
//   customCursor.style.display = 'block';
// });



/// Crear cursor personalizado
const customCursor = document.createElement('div');
customCursor.classList.add('custom-cursor');
document.body.appendChild(customCursor);

// Estilos CSS
customCursor.style.position = 'fixed';
customCursor.style.zIndex = '9999';
customCursor.style.pointerEvents = 'none';
customCursor.style.width = '50px';
customCursor.style.height = '50px';
customCursor.style.backgroundImage = 'url(./cursor.svg)';
customCursor.style.backgroundSize = 'cover';
customCursor.style.transition = 'transform 0.3s ease-in-out';

// Función para calcular el centro del viewport
function getViewportCenter() {
  return {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  };
}

// Función para actualizar la posición inicial del cursor
function updateCursorPosition() {
  const center = getViewportCenter();
  customCursor.style.left = `${center.x - (customCursor.offsetWidth / 2)}px`; // Offset by half width for centering
  customCursor.style.top = `${center.y + 100 }px`;  // Offset by half height for centering
}

// Llamar a la función al cargar la página y cada vez que se redimensione
updateCursorPosition();
window.addEventListener('resize', updateCursorPosition);

// Eventos para ratón y táctil
document.addEventListener('mousemove', (e) => {
  customCursor.style.left = `${e.clientX}px`;
  customCursor.style.top = `${e.clientY}px`;
});

document.addEventListener('touchmove', (e) => {
  const touch = e.touches[0];
  customCursor.style.left = `${touch.clientX}px`;
  customCursor.style.top = `${touch.clientY}px`;
});

// Evento para salida del mouse de la página
document.addEventListener('mouseleave', () => {
  // Animación al salir de la página
  customCursor.style.transform = 'scale(1.5)';
  setTimeout(() => {
    customCursor.style.transform = 'scale(1)';
  //  customCursor.style.transition = 'left 0.3s ease-in-out, top 0.3s ease-in-out'
  // customCursor.style.transform = 'translate(-50%, -50%)'
  updateCursorPosition();
  }, 300);

});
