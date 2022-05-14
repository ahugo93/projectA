let image = document.querySelector("#pet") 

// Obtain the 'shrink-grow' button, and assign it to the changeSize variable
let changeSize = document.querySelector("#shrink-grow")

//DO NOT CHANGE THE FOLLOWING CODE
changeSize.addEventListener("click", function() {
  if (image.style.height == "300px") {
    image.style.width = "25px"
    image.style.height = "25px"
  }
  else {
    image.style.height = "300px"
    image.style.width = "300px"
  }
})