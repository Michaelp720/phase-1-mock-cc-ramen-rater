// write your code here


fetch('http://localhost:3000/ramens')
    .then(function(response){
        return response.json();
    })
    .then((data) => renderRamens(data))

function renderRamens(ramenArr) {

    const ramenMenu = document.querySelector('#ramen-menu');

    ramenArr.forEach((ramenObj) => {
        // console.log(ramenObj);
        // console.log(ramenObj.image);

        const img = document.createElement('img');
        img.src = ramenObj.image;

        ramenMenu.appendChild(img);

        img.addEventListener('click', handleClick);

        function handleClick() {
            const nameDisplayLocation = document.querySelector('.name');
            const imgDisplayLocation = document.querySelector('.detail-image');
            const restaurantDisplayLocation = document.querySelector('.restaurant');
            const ratingDisplayLocation = document.querySelector('#rating-display');
            const commentDisplayLocation = document.querySelector('#comment-display');

            //console.log(nameDisplayLocation)

            nameDisplayLocation.innerText = ramenObj.name;
            imgDisplayLocation.src = ramenObj.image;
            restaurantDisplayLocation.innerText = ramenObj.restaurant;
            ratingDisplayLocation.innerText = ramenObj.rating;
            commentDisplayLocation.innerText = ramenObj.comment;
        }
    });
}

const form = document.querySelector('#new-ramen');
form.addEventListener('submit', (e)=> addRamen(e))

function addRamen(e) { //should add a new element to ramen menu based on the forms fields
    e.preventDefault();

    const newRamenObj = {
        name : e.target.name.value,
        restaurant :e.target.restaurant.value,
        image : e.target.image.value,
        rating : e.target.rating.value,
        comment : e.target['new-comment'].value
    }

    renderRamens([newRamenObj]);
}









//     document.querySelector('#new-ramen').addEventListener('submit', addRamen); //listens for user submitting form

//     function addRamen(e) { //should add a new element to ramen menu based on the forms fields
//         e.preventDefault();
//         //same as .then(function(data) using the text in the input
//         e.target.children[2].value; //Name input
//         document.querySelector('#new-name').value; //Name input
//         e.target.children[4].value; //restaurant input
//     }



