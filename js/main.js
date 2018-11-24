// get image element
const img = document.getElementById('cat-image');


const clickCounter = (function() {
let clicks = 0;
let countContainer = document.getElementById('click-count')

    return function clickCounter(evt) {
        clicks +=1;
        countContainer.textContent = `${clicks}`;

    };

})();

//add event listner
img.addEventListener('click', clickCounter);