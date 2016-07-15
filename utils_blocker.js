function disableBlocker(){
  localStorage.setItem("time", Date.now());
  var target = localStorage.getItem("url");
  localStorage.removeItem("url");
  window.location.href = target;
}

function whiteList(){
  var target = localStorage.getItem("url");
  var white_list = localStorage.getItem("white_list");
  if (white_list===null) {
    white_list = [];
  } else {
    white_list = white_list.split(",");
  }
  white_list.push(target);
  localStorage.setItem("white_list", white_list.join(","));
  localStorage.removeItem("url");
  window.location.href = target;
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('disable_blocker').addEventListener('click', disableBlocker);
  document.getElementById('white_list').addEventListener('click', whiteList);
});
