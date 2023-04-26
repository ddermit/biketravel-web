<script>
// Obtener el botón
var myButton = document.getElementById("myBtn");

// Cuando el usuario desplaza 20px desde la parte superior de la página, muestra el botón
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// Cuando el usuario hace clic en el botón, lleva al inicio de la página
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
</script>