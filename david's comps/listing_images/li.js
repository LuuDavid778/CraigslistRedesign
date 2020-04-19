
var img_counter = 0 
var images = [
    
{
 img: "../assets/maintruck.png"
},

{
    img: "../assets/truckmini1.jpg"
},

{
    img: "../assets/truckmini2.jpg"
}



]


function forwardImage() {
    if (img_counter === 2) {
        document.querySelector(".listing_mainimage").src = images[img_counter].img 
        img_counter = 0 
      
    } else
    img_counter++
    document.querySelector(".listing_mainimage").src = images[img_counter].img 
    console.log(img_counter)
    
}


function backImage() {
 
    if (img_counter === 0) {

        img_counter = 2
        document.querySelector(".listing_mainimage").src = images[img_counter].img 
   
    } else
    img_counter--
    document.querySelector(".listing_mainimage").src = images[img_counter].img 
    console.log(img_counter)
    
}

