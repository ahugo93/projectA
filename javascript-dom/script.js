const allPetNames = document.querySelectorAll(".pet-name");
const names = ["Tom", "Mr.Wisker", "Kyle"];

//const myUser = document.createElement("li");
//myUser.textContent = "Craig";
//const myUser2 = document.createElement("li");
//myUser2.textContent = "David";
//const userList = document.querySelector(".user-list");
//userList.append(myUser);
//userList.append(myUser2);
//adds names to user list

const descritionButton = document.querySelector(".description-button");
const text = document.querySelector(".pet-name");
descriptionButton.addEventListener("click", function (){
for (let i = 0; i < names.length; i++) {
  allPetNames[i].textContent = names[i];
  const h2 = document.createElement("h2");
  h3.textContent = `Description: My ${names[i]} is ${allPetNames[i].textContent}`;
  allPetNames[i].append(h2);
}});

const colorButton = document.querySelector(".color-button");
const text = document.querySelector(".pet-name");
colorButton.addEventListener("click", function () {
  text.style.color = "red";
});



const addImgButton = document.querySelector(".add-img-button");
const imageContainer = document.querySelector(".img-container");
addImgButton.addEventListener("click", function () {
  let img = document.createElement("img");
  img.src =
    "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg";
  img.style.width = "200px";
  img.style.height = "200px";
  imageContainer.append(img);
});

const catImage = document.querySelector("#cat-img");
catImage.addEventListener("mouseover", function () {
  catImage.style.width = "200px";
  catImage.style.height = "200px";
});
catImage.addEventListener("mouseout", function () {
  catImage.style.width = "600px";
  catImage.style.height = "800px";
});