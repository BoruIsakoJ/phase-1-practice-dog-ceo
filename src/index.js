console.log('%c HI', 'color: firebrick');

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const divContainer = document.getElementById("dog-image-container");

fetch(imgUrl)
  .then(resp => resp.json())
  .then(dogs => {
    dogs.message.forEach(dogUrl => {
      const img = document.createElement("img");
      img.style.width = "200px"; 
      img.style.margin = "10px";
      img.src = dogUrl;
      divContainer.appendChild(img);
    });
  });

const breedUrl = "https://dog.ceo/api/breeds/list/all";
const ulEl = document.getElementById("dog-breeds");
const dropdown = document.getElementById("breed-dropdown");

let allBreeds = []; 

fetch(breedUrl)
  .then(resp => resp.json())
  .then(data => {
    allBreeds = Object.keys(data.message); 

    allBreeds.forEach(breed => {
      const li = document.createElement("li");
      li.textContent = breed;
      li.style.cursor = "pointer";
      ulEl.appendChild(li);

      li.addEventListener("click", () => {
        li.style.color = li.style.color === "red" ? "black" : "red";
      });
    });
  });

dropdown.addEventListener("change", function (event) {
  const selectedLetter = event.target.value;
  ulEl.innerHTML = ""; 

  allBreeds.forEach(breed => {
    if (breed.startsWith(selectedLetter)) {
      const li = document.createElement("li");
      li.textContent = breed;
      li.style.cursor = "pointer";
      ulEl.appendChild(li);

      li.addEventListener("click", () => {
        li.style.color = li.style.color === "red" ? "black" : "red";
      });
    }
  });
});
