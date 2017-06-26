document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('message', function(e) {
    var origin = 'https://javascript-test-a1008u.c9users.io';
    if (e.origin !== origin) { return; }
    document.getElementById('result').textContent = e.data;

    var current = new Date();
    e.source.postMessage(current, origin);
  }, false);
}, false);
