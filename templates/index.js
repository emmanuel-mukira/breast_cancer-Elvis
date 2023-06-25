window.onload = function() {
    Particles.init({
      selector: '.background',
      connectParticles: true,
      speed: 5,
      resumeAnimation: true,
      maxParticle: 9000,
      color: '#000000',
      minDistance: 160,
      responsive: true
    });
  };