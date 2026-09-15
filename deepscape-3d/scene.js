const section = document.getElementById('sceneWalk');
const launch = document.getElementById('walkLaunch3d');
const status = document.getElementById('walk3dStatus');
const reset = document.getElementById('walkReset3d');
const fullscreen = document.getElementById('walkFullscreen3d');
const stops = [...document.querySelectorAll('[data-stop]')];
let viewer;
let loading = false;
let active = false;
let currentStop = 0;

function setStatus(text) {
  status.textContent = text;
}

function setActive(value) {
  active = value;
  section.classList.toggle('is-3d', value);
  document.getElementById('walkCanvas').setAttribute('aria-hidden', String(!value));
  launch.textContent = value ? 'Return to Poster' : 'Enter 3D';
  launch.setAttribute('aria-pressed', String(value));
  reset.hidden = !value;
  fullscreen.hidden = (!value && !document.fullscreenElement) || !section.requestFullscreen;
  viewer?.setActive(value);
  setStatus(value ? 'Baked light active. Drag to look around.' : 'Poster loaded. 3D loads only after you click.');
}

async function ensureViewer() {
  if (viewer || loading) return viewer;
  loading = true;
  launch.disabled = true;
  launch.textContent = 'Loading...';
  setStatus('Loading the optimized 3D scene...');
  try {
    const { createSceneWalk } = await import('./scene-walk-runtime.js?v=408b2ed');
    viewer = await createSceneWalk({
      container: document.getElementById('walkCanvas'),
      onProgress: setStatus,
      onContextLost: () => {
        setActive(false);
        viewer?.dispose();
        viewer = null;
        setStatus('3D paused by the browser. Poster mode is still available.');
      },
    });
    viewer.goTo(currentStop, true);
    return viewer;
  } finally {
    loading = false;
    launch.disabled = false;
  }
}

launch.addEventListener('click', async () => {
  if (loading) return;
  if (viewer) {
    setActive(!active);
    return;
  }
  try {
    await ensureViewer();
    setActive(true);
  } catch (error) {
    console.warn('Fast 3D preview unavailable:', error);
    launch.textContent = 'Retry 3D';
    setStatus('3D could not load. Try refreshing or enabling browser hardware acceleration.');
  }
});

reset.addEventListener('click', () => {
  currentStop = 0;
  viewer?.goTo(0);
  updateStops();
});

fullscreen.addEventListener('click', async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await section.requestFullscreen();
  } catch {
    setStatus('Fullscreen is not available in this browser.');
  }
});

document.addEventListener('fullscreenchange', () => {
  fullscreen.textContent = document.fullscreenElement ? 'Exit Fullscreen' : 'Fullscreen';
  fullscreen.hidden = (!active && !document.fullscreenElement) || !section.requestFullscreen;
});

for (const button of stops) {
  button.addEventListener('click', async () => {
    currentStop = Number(button.dataset.stop);
    updateStops();
    if (!viewer) await ensureViewer();
    viewer?.goTo(currentStop);
    setActive(true);
  });
}

function updateStops() {
  stops.forEach(button => button.classList.toggle('active', Number(button.dataset.stop) === currentStop));
}
