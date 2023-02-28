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