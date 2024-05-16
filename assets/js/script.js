const buttonOne = document.querySelector(".one");
const buttonTwo = document.querySelector(".two ");
const buttonThree = document.querySelector(".three");
const buttonFour = document.querySelector(".four");
const heroContent = document.querySelector(".hero-content");


buttonOne.addEventListener('click', () => {
    heroContent.style.background = "#ffff62";
    heroContent.style.color = "#000";
})
buttonTwo.addEventListener('click', () => {
    heroContent.style.background = "#9a9a9a";
    heroContent.style.color = "#fff";
})
buttonThree.addEventListener('click', () => {
    heroContent.style.background = "#ff748c";
    heroContent.style.color = "#fff";
})
buttonFour.addEventListener('click', () => {
    heroContent.style.background = "#8989ff";
    heroContent.style.color = "#fff";
})
const light = document.querySelector('.light')
const helloWorld = document.querySelector('.hello-world-section')
const title = document.getElementById("title")
const paragraph = document.getElementById("paragraph")
light.addEventListener('click', () => {
    light.classList.toggle("fa-moon")
    if(light.classList.toggle('fa-sun')) {
        light.style.color = '#000'
        helloWorld.style.background = "#fff"
        helloWorld.style.transition = ".3s"
        title.style.color = "#000"
        paragraph.style.color = "#000"
    }else {
        light.style.color = '#fff'
        helloWorld.style.background = "#000"
        helloWorld.style.transition = ".3s"
        title.style.color = "#fff"
        paragraph.style.color = "#fff"
    }
})

// accordion 
let accordion = document.querySelectorAll(".accordion-container .accordion")

accordion.forEach((item) => {
    item.onclick = () => {
        accordion.forEach((acc) => {
            acc.classList.remove("active")
        })
        item.classList.add("active")
    } 
})

// evaluation 
// script.js
const stars = document.querySelectorAll('.star');

stars.forEach(star => {
    star.addEventListener('mouseover', function() {
        const value = this.getAttribute('data-value');
        highlightStars(value);
    });

    star.addEventListener('mouseout', function() {
        const rating = document.querySelector('.rating').getAttribute('data-rating');
        highlightStars(rating);
    });

    star.addEventListener('click', function() {
        const value = this.getAttribute('data-value');
        document.querySelector('.rating').setAttribute('data-rating', value);
    });
});

function highlightStars(value) {
    stars.forEach(star => {
        if (parseInt(star.getAttribute('data-value')) <= value) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}