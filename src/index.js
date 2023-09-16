// console.log("%c HI", "color: firebrick");
// console.log("%c anthony test", "color: dodgerblue");

document.addEventListener("DOMContentLoaded", () => {
  // Challenge 1
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((resp) => resp.json())
    .then((data) => {
      //   console.log(data);
      const imgCont = document.getElementById("dog-image-container");
      data.message.forEach((imageUrl, i) => {
        const img = document.createElement("img");
        img.setAttribute("src", imageUrl);
        img.setAttribute("alt", `image-${i}`);
        // img.setAttribute("width", "200px");
        img.setAttribute("height", "300px");
        imgCont.append(img);
      });
    })
    .catch((err) => console.log("Error: ", err.message));

  // Challenge 2
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((resp) => resp.json())
    .then((data) => {
      const dogBreeds = document.getElementById("dog-breeds");
      const breeds = Object.keys(data.message);

      const listItemHandler = (breed) => {
        const li = document.createElement("li");
        li.textContent = breed;
        // Challenge 3
        li.addEventListener("click", () => li.classList.toggle("highlight"));
        dogBreeds.append(li);
      };

      breeds.forEach((breed) => listItemHandler(breed));

      // Challenge 4
      let dropdown = document.getElementById("breed-dropdown");
      dropdown.addEventListener("click", (e) => {
        dogBreeds.innerHTML = "";
        breeds
          .filter((breed) => breed.startsWith(e.target.value))
          .forEach((breed) => listItemHandler(breed));
      });
    })
    .catch((err) => console.log("Error: ", err.message));
});
