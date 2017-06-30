// ==UserScript==
// @name        ITADGamesCycler
// @namespace   itad
// @include     https://isthereanydeal.com/*
// @version     1
// @grant       none
// ==/UserScript==

document.addEventListener("keyup", function(e){
  if (e.keyCode != 37 && e.keyCode != 39) {
    return;
  }
  
  var m = window.location.hash.match(/\?plain=(.+)/);
  if (m) {
    var plain = m[1];
    var node = document.querySelector("div.game[data-plain="+plain+"]");
    if (!node) { return; }

    var sibling = null;
    if (e.keyCode == 39 && node.nextSibling) {
      sibling = node.nextSibling;
    } else if (e.keyCode == 37 && node.previousSibling) {
      sibling = node.previousSibling;
    }
    
    if (sibling && sibling.dataset) {
      var newPlain = sibling.dataset.plain;
        window.location.hash = window.location.hash.replace("plain="+plain, "plain="+newPlain).substr(1);
      }
  }
});
