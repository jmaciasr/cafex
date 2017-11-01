var menu = document.getElementById('mainMenu');
var iconMenu = document.getElementById('iconMenu');


iconMenu.addEventListener("click", function(){
	menu.classList.toggle('hidden');
	iconMenu.classList.toggle('icon-menu--exit');

});

var mediaquery1024 = window.matchMedia("(min-width: 1024px)");


function remeveClassHiddeMneu() {
  if (mediaquery1024.matches) {
    consol.log("jojola");
  } else {
    consol.log("bye, bye");
  }
}
mediaquery1024.addListener(remeveClassHiddeMneu);