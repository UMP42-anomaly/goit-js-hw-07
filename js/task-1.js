const categories = document.getElementById("categories");
console.log(`Number of categories: ${categories.children.length}`)

for (let i = 0; i < categories.children.length; i++) {
    const item = categories.children[i];
    console.log(`Category: ${item.querySelector("h2").textContent}`);
    console.log(`Elements: ${item.querySelector("ul").children.length}`);
}