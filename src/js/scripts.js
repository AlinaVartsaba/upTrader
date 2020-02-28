let pages = document.querySelectorAll('.page-section');
let section = document.querySelector('.section');

function drawImage(img, imgSrc) {
    let tmpImage = new Image();
    tmpImage.onload = function () {
        img.setAttribute('src', this.src);
    };
    tmpImage.src = imgSrc;
}

function Show(id) {
    let width = document.body.clientWidth;

    if (width < 1200) {
        openContent(id);
    } else {
        Animate(id);
    }
}


//open content on mobile
function openContent(id) {
    let arrowSort = document.querySelectorAll('.item-list__arrow');

    if (!pages[id].classList.contains("show")) {
        drawImage(arrowSort[id], "./img/icons/arrow-up.svg")
    } else {
        drawImage(arrowSort[id], "./img/icons/arrow-down.svg")
    }
    pages[id].classList.toggle("show");
    section.classList.toggle("section__background");
}

let isTabMode = false;

//open content on desktop via animation
function Animate(id) {
    let items = document.querySelectorAll('.item-list__item');
    let content = document.querySelector('.content');
    let currentItem = pages[id];

    if (!isTabMode) {
        section.classList.toggle('animate-item');

        items.forEach(function (item) {
            item.classList.toggle('animate-circle');
        });

        items[id].addEventListener('animationend', function () {
            currentItem.style.display = "block";
            items[id].classList.add('item-underline');
            content.classList.toggle('opacity');
        });

        isTabMode = true;
    } else {
        pages.forEach(function (e) {
            e.classList.remove("opacity");
            e.style.display = "none";
        });

        items.forEach(function (e) {
            e.classList.remove("item-underline");
        });

        currentItem.classList.toggle('opacity');
        currentItem.style.display = "block";
        items[id].classList.add('item-underline');
    }
}
