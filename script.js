document.addEventListener('DOMContentLoaded', () => {

  const contenedorPetalos = document.getElementById('petalas');
  const CANTIDAD_PETALOS = 14;

  for (let i = 0; i < CANTIDAD_PETALOS; i++) {
    const petalo = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    petalo.setAttribute('viewBox', '0 0 20 20');
    petalo.classList.add('petalo');

    const uso = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    uso.setAttribute('href', '#icono-petalo');
    petalo.appendChild(uso);

    const izquierda = Math.random() * 100;
    const duracionCaida = 12 + Math.random() * 10;
    const duracionBalanceo = 3 + Math.random() * 2;
    const retraso = Math.random() * 14;
    const tamano = 10 + Math.random() * 10;

    petalo.style.left = izquierda + 'vw';
    petalo.style.width = tamano + 'px';
    petalo.style.height = tamano + 'px';
    petalo.style.animationDuration = `${duracionCaida}s, ${duracionBalanceo}s`;
    petalo.style.animationDelay = `${retraso}s, ${retraso}s`;

    contenedorPetalos.appendChild(petalo);
  }

  const sobre = document.getElementById('sobre');
  const pantallaSobre = document.getElementById('pantalla-sobre');
  const pantallaInvitacion = document.getElementById('pantalla-invitacion');
  let abierta = false;

  sobre.addEventListener('click', () => {
    if (abierta) return;
    abierta = true;

    sobre.classList.add('abierto');

    setTimeout(() => {
      pantallaSobre.classList.add('saliendo');
    }, 650);

    setTimeout(() => {
      pantallaSobre.hidden = true;
      pantallaInvitacion.hidden = false;
      pantallaInvitacion.classList.add('entrando');
      iniciarRevelado();
    }, 1350);
  });

  function iniciarRevelado() {
    const elementos = document.querySelectorAll('[data-reveal]');
    elementos.forEach((el) => {
      const orden = Number(el.dataset.reveal) || 1;
      setTimeout(() => {
        el.classList.add('visible');
      }, orden * 260);
    });
  }

  const botonMusica = document.getElementById('boton-musica');
  const audio = document.getElementById('audio-fondo');
  let sonando = false;

  botonMusica.addEventListener('click', () => {
    if (!sonando) {
      audio.play().catch(() => {
        // El navegador puede bloquear si el audio aún no cargó
      });
      sonando = true;
      botonMusica.setAttribute('aria-pressed', 'true');
      botonMusica.setAttribute('aria-label', 'Silenciar música');
    } else {
      audio.pause();
      sonando = false;
      botonMusica.setAttribute('aria-pressed', 'false');
      botonMusica.setAttribute('aria-label', 'Activar música');
    }
  });

});
