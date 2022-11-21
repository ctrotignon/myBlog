const chevronLeft = document.getElementsByClassName('chevron')[0];
const chevronRight = document.getElementsByClassName('chevron-right')[0];

const imageCarrousel = document.getElementsByClassName('image-carrousel');



chevronLeft.addEventListener('click', () => {

    for(let i = 0; i < imageCarrousel.length; i++) {

            if(i < imageCarrousel.length && i !== 0){
               imageCarrousel[i] = imageCarrousel[i-1];  
            } else {
                imageCarrousel[i] = imageCarrousel[imageCarrousel.length -1]
            }

    }
    
});

chevronRight.addEventListener('click', () => {
    for(let i = 0; i < imageCarrousel.length; i++) {
        console.log(imageCarrousel[i])
        if(i < (imageCarrousel.length-1) ){
            imageCarrousel[i] = imageCarrousel[i+1];  
        } else {
            imageCarrousel[i] = imageCarrousel[0]
        }
   
    }
});


