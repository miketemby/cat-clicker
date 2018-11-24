// get image element
const img = document.getElementById('cat-image');

// create cat class
class Cat{
    constructor(name, image) {

    this.name = name;
    this.image = image;
    this.clicks = 0;
                  
    }

    updateClicks() {
        this.clicks ++;
        return this.clicks;
    };

};


const clickCounter = (function() {
let clicks = 0;
let countContainer = document.getElementById('click-count');
let cats = [new Cat('Harry', 'img/cat.jpg'), new Cat('Larry', 'img/cat-2.jpg')];

countContainer.textContent = '0';

    return function clickCounter(evt) {
        clicks +=1;
        countContainer.textContent = `${clicks}`;

    };

})();

//add event listner
img.addEventListener('click', clickCounter);