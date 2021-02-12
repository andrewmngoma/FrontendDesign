var url = new URL(window.location.href);
var email = url.searchParams.get('email');

if (email) {
    if (confirm("Thanks for subscribing. Please check your email address: " + email)) {
        thankYou();
    } else {
        if (prompt("Please enter your email address.")) {
            thankYou();
        }
    }
}

function thankYou() {
    window.location.search = '';
    alert("Thanks for subscribing!");
}

function searchPage(event) {
    event.preventDefault();

    var formData = new FormData(event.target);
    var searchTerm = formData.get('search');

    find(searchTerm);
}