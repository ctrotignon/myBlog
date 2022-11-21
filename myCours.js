const changeBorder = document.getElementsByClassName('cart');
const counter = document.getElementsByClassName('counter')[0];
let selectedCourse = 0;

Array.from(changeBorder).forEach(element => {
    element.addEventListener('click', ()=> {
        element.classList.toggle('selected')
        selectedCourse = document.getElementsByClassName('selected').length;
        counter.innerHTML = selectedCourse;
    })
 ;
});

