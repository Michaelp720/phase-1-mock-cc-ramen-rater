// write your code here

document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/ramens')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        for(const key in data){ //iterates over each object in data
        //make a list with all the data from the object with key:value pairs where key is id and value is innerText?
        let img = document.createElement('img'); 
        img.src = key['image'];
        img.id = key['id'];
        document.querySelector('div#ramen-menu').appendChild(img); //should add the img to ramen-menu
        }
    })

    document.querySelector('div#ramen-menu').addEventListener('click', displayRamenInfo); //adds event listener for clicking on ramen-menu elements

    function displayRamenInfo(e) { //changes display elements to equal the clicked menu element
        let id = e.target.id;
        
        document.querySelector('img.detail-image').src = e.target.src;
        document.querySelector('h2.name').innerText = 
        document.querySelector('h3.restaurant').innerText =
        document.querySelector('#rating-display').innerText = 
        document.querySelector('#comment-display').innerText =
        
    }

    document.querySelector('#new-ramen').addEventListener('submit', addRamen); //listens for user submitting form

    function addRamen(e) { //should add a new element to ramen menu based on the forms fields
        e.preventDefault();
        //same as .then(function(data) using the text in the input
    }
})


