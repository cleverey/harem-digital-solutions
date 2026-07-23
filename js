// Welcome message when the website loads
window.onload = function() {
    console.log("Welcome to Harem Digital Solutions");
};


// Button click function
function showMessage() {
    alert("Thank you for choosing Harem Digital Solutions!");
}


// Change navigation style when scrolling
window.onscroll = function() {
    let nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.backgroundColor = "#0b3d91";
    } else {
        nav.style.backgroundColor = "#222";
    }
};


// Contact form message
function submitForm() {
    alert("Your message has been received. We will contact you soon.");
}
