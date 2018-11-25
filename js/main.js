// create cat class
class Cat{
    constructor(name, image) {

    this.name = name;
    this.image = image;
    this.clicks = 0;
    this.html = this.constructHTML();
                  
    }

    updateClicks() {
        this.clicks ++;
        return this.clicks;
    };


    constructHTML() {
        let catContainer = document.createElement('section');
        let clickCounter = document.createElement('div');
        let image = document.createElement('img');
        let nameBox = document.createElement('div')

        clickCounter.textContent = this.clicks;
        clickCounter.classList.add('click-container');
    
        image.setAttribute('src',this.image);
        image.classList.add('cat-image');
    
        nameBox.textContent = this.name;
        nameBox.classList.add('name-container');

        image.addEventListener('click', (function(thisCat){

            return function(evt) {
                thisCat.updateClicks();
                evt.target.previousSibling.textContent = thisCat.clicks;
            };

        })(this));

        catContainer.appendChild(clickCounter);
        catContainer.appendChild(image);
        catContainer.appendChild(nameBox);
        catContainer.classList.add('cat-container');

        return catContainer;

    }

};

// add all cats to an array
let cats = [new Cat('Harry', 'img/cat.jpg'), new Cat('Larry', 'img/cat-2.jpg'), new Cat('Barry', 'img/cat-3.jpg'), new Cat('Sally', 'img/cat-4.jpg'), new Cat('Philbert', 'img/cat-5.jpg'),];
const body = document.getElementById('body');
const foot = document.getElementById('footer');

// create html
for(cat of cats) {

    // body.insertBefore(cat.html,foot);

}

// TO DO
// create side by side columns for cat area and cat list
const catArena = document.createElement('section');
catArena.setAttribute('id', 'cat-arena');

const catListContainer = document.createElement('section');
catListContainer.setAttribute('id', 'cat-list-container');

body.insertBefore(catArena, foot);
body.insertBefore(catListContainer, foot);


// TO DO
// create an unordered list of cats

let catsList = document.createElement('ul');
catsList.setAttribute('id', 'cat-list');
for(cat of cats) {
    let catItem = document.createElement('li');
    catItem.classList.add('cat-list-item');

    let img = document.createElement('img');
    img.setAttribute('src', cat.image);

    catItem.innerHTML = img.outerHTML;

    catItem.addEventListener('click', (function(thisCat){

        return function() {
            changeCats(thisCat);
        };

    })(cat));



    catsList.appendChild(catItem);
}

catListContainer.appendChild(catsList);


// TO DO
// build logic to remove current cat and add new cat when selected from list

function changeCats(cat) {
    catArena.innerHTML = '';
    catArena.appendChild(cat.html);
}





// TO DO
// Build Model 
// data: 
//  Cat Class?
//  Array of cats    


// TO DO
// Build Controller 
// Methods:
//  init() ... call model and create a list of cats
//  constructHTML() ...build html from models cats array and pass it to view
//  constructList() ...build


// TO DO
// Build List View 
// Methods:
//  render() ... clear html and fill html
//  addEventListner() ... add the event listenr and call constructList


// TO DO
// Build Cat Area View 
//  render() ... clear html and fill html
//  addEventListner() ... and the event listenr and call constructHTML