var circles = document.querySelectorAll(".circle");
var rating = 4;
for (var i = 1; i < circles.length; i++) {
  circles[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    rating = this.innerHTML;
  });
}

const btn = document.getElementsByClassName("submitRating");
/* index 0 is used because get element functions return the collection of html conetents so to access the element we use index 0*/
btn[0].addEventListener("click", function () {
  document.getElementsByClassName("rating-div")[0].classList.add("rating");
  document.getElementsByClassName("thankyou-div")[0].classList.remove("thanks");
  document.getElementsByClassName("display-rating")[0].innerHTML = "You selected "+rating+" out of 5";
});
