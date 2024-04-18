const apikey = "TTtwWf72yP91r8FlJEZNQ8noD0ewHfh6_TRFJCE6z3A";

const count = 10;

async function displayImages() {
  let response = await fetch(
    `https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}`
  );
  let data = await response.json();
  console.log(data);
  for (let imageData of data) {
    let a = document.createElement("a");
    a.href = `${imageData.links.html}`;
    a.setAttribute("target", "_blank");
    a.innerHTML = `
    <img class="iamImg" src="${imageData.urls.small}" alt="">
    `;
    imageContainer.append(a);
  }
}

window.addEventListener("scroll", () => {
  if (window.scrollY + window.innerHeight + 200 >= document.body.offsetHeight) {
    displayImages();
  }
});

displayImages();
