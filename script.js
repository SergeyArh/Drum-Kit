function playsound(e) {
  window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`li[data-key="${e.keyCode}"]`);
    if (!audio) return;

    audio.play();
    audio.currentTime = 0;
    key.classList.add('playing');
  });
}


function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playsound);