let one_way = document.getElementById('one_way');
let round_trip = document.getElementById('round_trip');
let round_btn = document.getElementById('round_btn');
let way_btn = document.getElementById('way_btn');

function showRound() {
    // one_way.style.display = "none";
    one_way.classList.add('d-none');
    one_way.classList.remove('d-flex');

    round_trip.classList.add('d-flex');
    round_trip.classList.remove('d-none');

    round_btn.classList.add('btn-style-black');
    round_btn.classList.remove('btn-style-gray');

    way_btn.classList.remove('btn-style-black');
    way_btn.classList.add('btn-style-gray');
}

function showWay() {
    one_way.classList.add('d-flex');
    one_way.classList.remove('d-none');

    round_trip.classList.add('d-none');
    round_trip.classList.remove('d-flex');

    // one_way.style.display = "block";
    way_btn.classList.add('btn-style-black');
    way_btn.classList.remove('btn-style-gray');

    round_btn.classList.add('btn-style-gray');
    round_btn.classList.remove('btn-style-black');
}


// popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// function of the fixed btn

let fixed_btn = document.getElementById("fixed-btn")
let special_offers = document.getElementById("special-offers-section")

document.addEventListener('DOMContentLoaded', function(){
    function toggle_fixed_btn(){
        let offers_rect = special_offers.getBoundingClientRect()
        if(offers_rect.bottom<0) {
            fixed_btn.classList.remove('d-none') 
            fixed_btn.classList.add('d-block') 
        }
        else {
            fixed_btn.classList.remove('d-block') 
            fixed_btn.classList.add('d-none') 
        }
    }

    window.addEventListener('scroll',toggle_fixed_btn)

    toggle_fixed_btn()
})

// start sign up
let pass =document.getElementById("pass")
let eye_close =document.getElementById("eye-close")
let eye_open =document.getElementById("eye-open")

function showPassword(event){

    if (pass.getAttribute("type") === "password") {
        pass.setAttribute("type", "text");
       
        eye_close.style.display="none"
        eye_open.style.display="block"

    } 
    event.preventDefault()
}

function hidePassword(event){
    if (pass.getAttribute("type") === "text") {
        pass.setAttribute("type", "password");
       
        eye_open.style.display="none"
        eye_close.style.display="block"
      } 
      event.preventDefault()
}

eye_close.addEventListener("click", showPassword);
eye_open.addEventListener("click", hidePassword);
