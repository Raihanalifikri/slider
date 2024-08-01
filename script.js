let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let caroulselDom = document.querySelector('.caroulsel');
let listItemDom = document.querySelector('.caroulsel .list')
let thumbnailDom = document.querySelector('.caroulsel .thumbnail')

nextDom.onclick = function() {
    showSlider('next')
}

prevDom.onclick = function() {
    showSlider('prev');
}

let timeRunning = 3000;
let timaAutoNext = 7000;
let runTimeOut;
let runAutoRUn  = setTimeout(() => {
    nextDom.click();
}, timaAutoNext);

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.caroulsel .list .item')
    let itemThumbnail = document.querySelectorAll('.caroulsel .thumbnail .item');

    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        caroulselDom.classList.add('next');
    } else {
        let positionLastItem = itemSlider.length -1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        caroulselDom.classList.add('prev')
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        caroulselDom.classList.remove('next')
        caroulselDom.classList.remove('prev')
    }, timeRunning)

    clearTimeout(runAutoRUn);
    runAutoRUn = setTimeout(() => {
        nextDom.click();
    }, timaAutoNext)
}