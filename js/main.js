// get image element
const img = document.getElementById('cat-img');

//add event listner
img.addEventListener('click', clickCounter);

(function() {
let clicks = 0;
let countContainer = document.getElementById('click-count')
    return function clickCounter(evt) {
        clicks +=1;
        clickCounter.textContent = `${clicks}`;

    };
    
})();