var intervalId = null
function startTimer() {
  var TOTAL_TIME_SECONDS = 60;
  var secondsLeft = TOTAL_TIME_SECONDS;

  var headerEl = document.getElementById('game-header');
  var timerValueEl = document.getElementById('timer-value');
  var progressEl = document.getElementById('progress');

  function pad(value) {
    return value < 10 ? '0' + value : '' + value;
  }

  function formatMMSS(totalSeconds) {
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;
    return pad(minutes) + ':' + pad(seconds);
  }

  function updateUI() {
    timerValueEl.textContent = formatMMSS(secondsLeft);
    var widthPercent = ((TOTAL_TIME_SECONDS - secondsLeft) * 100) / TOTAL_TIME_SECONDS;
    progressEl.style.width = widthPercent + '%';
  }

  function emitTimerComplete() {
    if (!headerEl) return;
    var event = new CustomEvent('timerComplete', { bubbles: true });
    headerEl.dispatchEvent(event);
  }

  function tick() {
    if (secondsLeft > 0) {
      secondsLeft -= 1;
      updateUI();
    } else {
      clearInterval(intervalId);
      intervalId = null;
      emitTimerComplete();
      console.log('Complete');
    }
  }

  function startTimerHandler() {
    setTimeout(() => {
      updateUI();
      intervalId = setInterval(tick, 1000);
    }, 1000);
  }

  function cleanup() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  // Auto-start on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startTimerHandler);
  } else {
    startTimerHandler();
  }

  // Attempt cleanup on page unload
  window.addEventListener('beforeunload', cleanup);
}
function stopTimer() {
  clearInterval(intervalId);
  intervalId = null;
}

