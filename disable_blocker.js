function disableBlocker(){
  localStorage.setItem("time", Date.now());
  var target = localStorage.getItem("url");
  localStorage.removeItem("url");
  window.location.href = target;
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('disable_blocker').addEventListener('click', disableBlocker);
});