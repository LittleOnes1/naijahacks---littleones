var banner_btn = document.getElementById("banner_btn");

banner_btn.addEventListener("click", function(){
    location.href = "register/index.html";
})

var qt_button = document.getElementsByClassName('qt_button');
var i;
for(i = 0; i<qt_button.length; i++){
    qt_button[i].addEventListener("click", function(){
        location.href = "course/countdown/index.html";
    })
}


var pt_button = document.getElementsByClassName("pt_button");
var i;
for(i = 0; i < pt_button.length; i++){
    pt_button[i].addEventListener('click', function(){
        location.href = "course/index.html"
    })
}


