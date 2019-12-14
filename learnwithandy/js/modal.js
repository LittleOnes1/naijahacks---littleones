var search = document.getElementById("search");
var modal = document.getElementById("modal");
var body = document.getElementById("body");
var cancel = document.getElementById('cancel');

search.addEventListener("click", function(){
    modal.style.display = "block";
})

cancel.addEventListener("click", function(){
    modal.style.display = "none";
    
})

// modal.addEventListener("click", function(){
//     modal.style.display = "none";
// })
    

// function myFunction() {
//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByClassName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "block";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
//   }
var input = document.getElementById('myInput');
var button = document.getElementById('button');
var ul = document.getElementById("myUL");
var li = ul.getElementsByClassName('li');
var rInput = document.getElementById('a_search').value;
// rInput.readOnly = 'true';
for (i = 0; i <li.length; i++) {
    li[i].style.display = "none";
}
button.addEventListener("click", function(){
    // Declare variables
    var filter, a, i, txtValue;
    filter = input.value.toUpperCase();
    for (i = 0; i <li.length; i++) {
        li[i].style.display = "none";
    }
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByClassName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
})