(function() {

  "use strict";

  var menu = document.querySelector("#menu");



  contextMenuListener(menu);

  document.addEventListener("click",function(event){
  	document.querySelector(".context-menu").classList.remove("active");
  });
  

  function contextMenuListener(el) {
    document.addEventListener( "contextmenu", function(e) {
    	e.preventDefault();
    	document.querySelector(".context-menu").classList.remove("active");
    	document.querySelector(".context-menu").classList.add("active");

    	document.querySelector(".context-menu").style.top = e.clientY + "px";
    	document.querySelector(".context-menu").style.left = e.clientX + "px";
      	console.log(e, el);

    });
  }



})();