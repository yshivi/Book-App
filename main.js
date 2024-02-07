const button = document.querySelector(".button");
const form = document.querySelector(".mainForm");
let container = document.querySelector(".container");
function BookDetails(title, author, pages) {
    (this.title = title), (this.author = author), (this.pages = pages);
    this.BookDetails = function () {
        console.log(`${title} ${author} ${pages}`);
    };
}
button.addEventListener("click", () => {
    form.style.display = "block";
});
let listOfBooks = [];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const book = new BookDetails(form.title.value, form.author.value, form.pages.value);
    listOfBooks.push(book);
    console.log(listOfBooks);
    form.title.value = "";
    form.author.value = "";
    form.pages.value = "";
    newCards(listOfBooks.length - 1);
});
let submit = document.querySelector("#submit");
submit.addEventListener("click", () => {
    form.style.display = "none";
});
function newCards(index) {
    let card = document.createElement("div");
    container.appendChild(card);
    card.setAttribute("id", "styleCard");

    let paraT = document.createElement("p");
    paraT.setAttribute("id", "flowWord")
    paraT.setAttribute("class", "flowWord")
    paraT.textContent = listOfBooks[index].title;
    card.appendChild(paraT);


    let paraA = document.createElement("p");
    paraA.setAttribute("class", "flowWord")
    paraA.textContent = listOfBooks[index].author;
    card.appendChild(paraA);


    let paraP = document.createElement("p");
    paraP.setAttribute("class", "flowWord")
    paraP.textContent = listOfBooks[index].pages;
    card.appendChild(paraP);

    let readButton = document.createElement("button");
    readButton.textContent = "READ";
    readButton.style.backgroundColor = "green";
    readButton.style.margin = "10px";


    let clicked = false;
    readButton.addEventListener("click", () => {
        if (!clicked) {
            readButton.style.background = "red";
            readButton.textContent = "Not Read";
            clicked = true;
        } else {
            readButton.style.background = "green";
            readButton.textContent = "READ";
            clicked = false;
        }
    });

    let removeButton = document.createElement("button");
    removeButton.setAttribute("id", "removeButton")
    removeButton.textContent = "Remove";
    card.appendChild(removeButton);
    container.appendChild(card);
    removeButton.addEventListener("click", () => {
        card.style.display = "none";
    });
}