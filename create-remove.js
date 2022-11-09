/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();
        console.log(data);

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here
        console.log(url);
        const breed = url.split('/')[4];

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here
        const newDog = document.createElement('li');
        const figure = document.createElement('figure');

        const image = document.createElement('img');
        image.setAttribute("src", `${url}`);
        const figCap = document.createElement('figcaption');
        figCap.innerText = `${breed}`;

        figure.appendChild(image);
        figure.appendChild(figCap);

        newDog.appendChild(figure);
        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here
        document.getElementsByTagName('ul')[0].appendChild(newDog);

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here
    const firstDog = document.getElementsByTagName("li")[0];
    if (!firstDog) {
        console.log('no dog in the list!');
        return
    }
    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
    firstDog.remove();
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
    const dogs = document.getElementsByTagName('li');
    length = dogs.length;
    if (length === 0) {
        console.log("no dog in the list!");
        return
    }
    const lastDog = dogs[length - 1];

    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
    lastDog.remove();
});
