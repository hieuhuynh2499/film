document.addEventListener("DOMContentLoaded", function() {
    let img_video = document.getElementById("img-video");
    let background_black = document.querySelectorAll(".background-black");
    let video = document.querySelectorAll(".video");
    img_video.onclick = function() {
        background_black[0].classList.add("background-black-show");
        video[0].classList.add("video-show");
        console.log(123);
    };
    background_black[0].onclick = function() {
        background_black[0].classList.remove("background-black-show");
        video[0].classList.remove("video-show");
    };
});