function displayList() {
    const fruits = document.getElementById('fruits');
    const ul = document.createElement('ul');
    for (let i = 0; i < fruits.childElementCount; i++) {
        const li = document.createElement('li');
        li.innerText = fruits.children[i].innerText;
        ul.appendChild(li)
    }
    fruits.innerHTML = "";
    fruits.appendChild(ul);
}