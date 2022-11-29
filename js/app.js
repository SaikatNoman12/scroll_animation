const boxes = document.querySelectorAll('.box');

// use for scroll animation;
window.addEventListener('scroll', checkOut);

checkOut();

function checkOut(){

    const triggerBottom = window.innerHeight / 5 * 3.7;
    // const triggerBottom = window.innerHeight / 4 * 1.8;
    // console.log(triggerBottom);
    
    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < triggerBottom){
            box.classList.add('show');
        }
        else{
            box.classList.remove('show');
        }
    });

}