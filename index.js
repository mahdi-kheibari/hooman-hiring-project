// for header
function setActive(index) {
    const items = document.getElementsByClassName("header-item")
    for (i = 0; i < items.length; i++) {
        if (items[i].className.search("active")!==-1) {
            items[i].className = items[i].className.replace(" active", "");
        }
    }
    items[index].className += " active";
}
function openSidebar() {
    document.getElementsByClassName("sidebar")[0].style.display="block";
}
function closeSidebar() {
    document.getElementsByClassName("sidebar")[0].style.display="none";
}

// for slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider-Slides");
  let paginations = document.getElementsByClassName("paginations-item");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < paginations.length; i++) {
    paginations[i].className = paginations[i].className.replace(" activeSlide", "");
  }
  slides[slideIndex-1].style.display = "block";  
  paginations[slideIndex-1].className += " activeSlide";
}