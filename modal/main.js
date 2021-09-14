var totalPosts = document.querySelectorAll(".posts .single-post");
var popup = document.getElementById("popup");
var popupImg = popup.querySelector(".post-img img");
var popupHeading = popup.querySelector(".post-title h2");
var popupContent = popup.querySelector(".post-content p");

for(i=0;i<totalPosts.length;i++){
    var singlePost = document.querySelectorAll(".single-post")[i];
    singlePost.addEventListener("click",function (){
    popup.style.display = "block";

    var postImg = this.querySelector(".post-img img").src;
    var postHeading = this.querySelector(".post-title h2").innerHTML;
    var postContent = this.querySelector(".post-content p").innerHTML;

    popupImg.src=postImg;
    popupHeading.innerHTML = postHeading;
    popupContent.innerHTML = postContent;
    })
}

function closePopup(){
    popup.style.display = "none";
}