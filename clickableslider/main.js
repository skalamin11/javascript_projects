var images = ["img/img1.png","img/img2.png","img/img3.png","img/img4.png"];
console.log(images.length)
var sliderArea = document.getElementById("sliderImage");
var count = 0;

function next(){
    count++;
    if(count >= images.length){
        count = 0;
        sliderArea.src=images[count]
    }else{
        sliderArea.src=images[count]
    }
}
function prev(){
    count--;
    if( count < 0){
        count = images.length - 1;
        sliderArea.src = images[count];
    }else{
        sliderArea.src = images[count];
    }
}
