
const btnAdd = document.querySelector('#add');

btnAdd.addEventListener('click', (e) => {

    console.log("oh, nice", e.target);

    const liCount = document.querySelectorAll('li').length;

    document.querySelector('ul').innerHTML += `<li>list item ${liCount + 1}</li>`;

});

document.querySelector('ul').addEventListener('click', (e) => {

    if (e.target.tagName === "LI") {
		e.target.classList.toggle("completed");
    }
});

document.querySelector('a').addEventListener('click', e => {

    e.preventDefault();

    alert("You can check in but you can never leave!");
});




