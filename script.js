// Create a tabbed interface where clicking on tabs displays different content sections without page reload.
var home = document.querySelector("#home");
var about = document.querySelector("#about ");
var contact = document.querySelector("#contact");

var hometext = document.querySelector("#hometext");
var abouttext = document.querySelector("#abouttext");
var contacttext = document.querySelector("#contacttext");

home.addEventListener("click", function(){
    hideAllTextElements()
     hometext.style.display="block";
     hometext.style.width = "50%";
})

about.addEventListener("click", function(){
    hideAllTextElements()
    abouttext.style.display = "block";
    abouttext.style.width = "50%";
})
contact.addEventListener("click", function(){
    hideAllTextElements()
    contacttext.style.display = "block";
    contacttext.style.width = "50%";
})

function hideAllTextElements() {
    hometext.style.display = "none";
    abouttext.style.display = "none";
    contacttext.style.display = "none";
  }