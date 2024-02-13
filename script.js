$(document).ready(function(){
  // Al cargar la página, ocultamos las cortinas
  $('.left-curtain').css('width', '0%');
  $('.right-curtain').css('width', '0%');

  $('.valentines-day').click(function(){
    // Animación de desvanecimiento de los elementos del sobre
    $('.envelope').css({'animation':'fall 3s linear 1', '-webkit-animation':'fall 3s linear 1'});
    $('.envelope').fadeOut(800, function() {
      // Ocultar elementos dentro de .valentines-day
      $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();
      

      // Hacer visible la carta con una animación ondulante
      $('#card').css({'visibility':'visible', 'opacity': 0, 'transform': 'scale(0.1)'});
      $('#reproductor').css({'display':'flex', 'opacity': 1});
      $('#card').animate({'opacity': 1}, {duration: 1000, step: function(now, fx) {
        var scale = 1 + Math.sin(now * Math.PI) * 0.1; // Calculamos la escala basada en la función seno
        $(this).css('transform', 'scale(' + scale + ')');
      }}); // Animación de ondulación
    });
  });

  const songSelect = document.getElementById('songSelect');
  const audioPlayer = document.getElementById('audioPlayer');
  const audioSource = document.getElementById('audioSource');
  const volumeControl = document.getElementById('volumeControl');
  
  // Función para cambiar la canción
  songSelect.addEventListener('change', function() {
    const selectedSong = this.value;
    audioSource.src = selectedSong;
    audioPlayer.load(); // Recarga el reproductor con la nueva fuente
    audioPlayer.play(); // Reproduce automáticamente la nueva canción
  });
  
  // Control de volumen
  volumeControl.addEventListener('input', function() {
    audioPlayer.volume = this.value / 100;
  });
});
