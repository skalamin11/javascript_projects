let accHeading = document.getElementsByClassName("heading");
let icon = document.getElementsByClassName("heading");


for(i=0; i<accHeading.length;i++){
    accHeading[i].addEventListener("click",function(){
        this.classList.toggle("open");
        this.nextElementSibling.classList.toggle("active")
    })
}
