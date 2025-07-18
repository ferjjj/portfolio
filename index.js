let sections = document.querySelectorAll('.nav_section');
let links = document.querySelectorAll('.nav-link');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.clientHeight;
        let id = sec.getAttribute('id');
        console.log(id);
        if (top >= (offset - height * 0.40)) {
            links.forEach(link => {
                link.classList.remove('active');
                document.getElementById('nav-' + id).classList.add('active');
            });
        }
    });
}

function highlightAndScrollToLink(identifier) {
    document.getElementById(`${identifier}`).scrollIntoView();
    let links = document.querySelectorAll('.active');
    links.forEach(element => {
        element.classList.remove('active');
    });
    document.getElementById(`nav-${identifier}`).classList.add('active');
}


function postMessageToGoogle() {

    var field1 = document.getElementById("contact-first-name").value;
    var field2 = document.getElementById("contact-last-name").value;
    var field3 = document.getElementById("contact-email").value;
    var field4 = document.getElementById("contact-details").value;


    $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc0LqtLWYS9aF2PUpC1MVXFOtL8X4nYkBaIyZ12AtA_NDRrJw/formResponse",

        data: {
            "entry.453023179": field1,
            "entry.1943905898": field2,
            "entry.1549738552": field3,
            "entry.511187647": field4
        },
        type: "POST",
        dataType: "xml",
    });
    document.getElementById("submit-message").innerHTML = "MESSAGE SENT";
    return false;
}


