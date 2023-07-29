console.log(`Number of categories: ${document
    .querySelector("#categories")
    .querySelectorAll("ul").length}`);

const categoryName = document.querySelectorAll(".item").forEach((element) => {
    console.log(`Category: ${element.querySelector("h2").textContent}`)
    console.log(`Elements: ${element.querySelectorAll("li").length}`)
})