var keys: any = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e: Event) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e: KeyboardEvent) {
  if (keys[e.keyCode]) { // new way: keys[e.key]
    preventDefault(e);
    return false;
  }
}

export function disableScroll() {
  // modern Chrome requires { passive: false } when adding event
  var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, { passive: false }); // modern desktop
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}