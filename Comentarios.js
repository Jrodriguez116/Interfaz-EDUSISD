// Obtener referencia a los elementos del DOM
const commentForm = document.getElementById('comment-form');
const commentsSection = document.getElementById('comments');

// Escuchar el evento submit del formulario de comentarios
commentForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir envío del formulario

  // Obtener valores de los campos del formulario
  const nameInput = document.getElementById('name');
  const commentInput = document.getElementById('comment');
  const nameValue = nameInput.value;
  const commentValue = commentInput.value;

  // Crear elementos para mostrar el comentario
  const commentContainer = document.createElement('div');
  commentContainer.className = 'comment';

  const nameElement = document.createElement('h3');
  nameElement.textContent = nameValue;

  const commentText = document.createElement('p');
  commentText.textContent = commentValue;

  // Agregar elementos al contenedor del comentario
  commentContainer.appendChild(nameElement);
  commentContainer.appendChild(commentText);

  // Agregar el contenedor del comentario a la sección de comentarios
  commentsSection.appendChild(commentContainer);

  // Limpiar campos del formulario
  nameInput.value = '';
  commentInput.value = '';
});
