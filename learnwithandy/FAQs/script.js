var btn = document.getElementsByClassName('button');

var i;

for (i =0; i < btn.length; i++) {
	btn[i].addEventListener("click", function(){
		this.classList.toggle("active");

		var panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		}
		else {
			panel.style.display = "block";
		}
	});
}

// for (i = 0; i < btn.length; i++) {
// 	btn[i].onclick = function(){
// 		this.classList.toogle("active");
// 		this.nextElementSibling.classList.toogle("show");
// 	}
// }

// for (i = 0; i < btn.length; i++) {
// 	btn[i].addEventListener("click", function(){
// 		this.classList.toogle("active");
// 		this.nextElementSibling.classList.toogle("show");
// 	})
// }

// btn.addEventListener("click", function(){
// 	btn.classList.add("active");
// })