const envelope = document.getElementById('envelope');
const envWrap = document.getElementById('envWrap');
const sealBtn = document.getElementById('sealBtn');
const readBtn = document.getElementById('readBtn');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');
const hint = document.querySelector('.hint');

function openEnvelope() {
  if (envelope.classList.contains('open')) return;
  envelope.classList.add('open');
  hint.classList.add('hide');
  setTimeout(() => {
    envWrap.classList.add('revealed');
    readBtn.classList.add('show');
  }, 1150);
}

sealBtn.addEventListener('click', openEnvelope);

readBtn.addEventListener('click', () => overlay.classList.add('show'));
closeBtn.addEventListener('click', () => overlay.classList.remove('show'));
overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.remove('show'); });