function scrollToAbout() {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
}

function showContact() {
    document.getElementById("contact-message").textContent =
        "Thanks for stopping by! 👋";
}