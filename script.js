let banner = document.getElementById("banner")
banner.style.height = window.innerHeight+"px"

let menuItems = document.querySelectorAll(".menuItem")
let contentsId = []
for (let menuItem of menuItems)
{
    contentsId.push(menuItem.title)
}

let offSetsTop = []
for (let id of contentsId)
{
    offSetsTop.push(document.getElementById(id).offsetTop)
}

let divs = document.querySelectorAll(".toReveal")
for (let element of divs)
{
    element.classList.remove("toReveal")
    element.classList.add("reveal")
}


$(document).ready(function() {

// Click event for any anchor tag that's href starts with #
    $('.menuItem').click(function(event) {
         // The id of the section we want to go to.
        // var id = $(this).attr("href");
        let id = $(this).attr("title");
        //
        // An offset to push the content down from the top.
        let offset = 60;
        //
        // Our scroll target : the top position of the section that has the id referenced by our href.
        let targetDiv = 0
        switch (id){
            case "ABm":
                targetDiv = offSetsTop[0]
                break;
            case "ABLP":
                targetDiv = offSetsTop[1]
                break;
            case "Pr":
                targetDiv = offSetsTop[2]
                break;
            case "Tech":
                targetDiv = offSetsTop[3] + 50
                break;
             case "Con":
                targetDiv = offSetsTop[4]
                break;
        }

        let target = targetDiv - offset;

        // The magic...smooth scrollin' goodness.
        $('html, body').animate({scrollTop:target}, 500);

        //prevent the page from jumping down to our section.
        event.preventDefault();
    });
});

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible-300) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
function menuReveal() {
    var menuReveals = document.querySelectorAll(".menuReveal");

    for (let i = 0; i < menuReveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = menuReveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            menuReveals[i].classList.add("active");
        } else {
            menuReveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", menuReveal);