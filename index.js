let curr = "home"
function home() {

    if (curr == "service"){
        document.querySelector(".welc").innerHTML = "WELCOME!"
        document.querySelector(".ask").style.visibility = "visible"
        document.querySelector(".flower1").style.right = "0px"
        document.querySelector(".flower1").style.top = "0px"
        document.querySelector(".flower2").style.top = "-200px"
        document.querySelector(".flower3").style.top = "400px"
        document.querySelector(".flower3").style.right = "400px"
        document.querySelector(".flower4").style.right = "700px"
        document.querySelector("#top-right-leaf").style.right = "-200px"
        document.querySelector("#bottom-right-leaf").style.right = "-100px"
        document.querySelector(".nail-img").style.top = "-400px"
        document.querySelector(".serv-hide-scroll").style.top = "-900px"
        console.log("came from service")
        curr = "home"
    }
    else if (curr == "about"){
        document.querySelector(".welc").innerHTML = "WELCOME!"
        document.querySelector(".ask").style.visibility = "visible"
        document.querySelector(".flower1").style.right = "0px"
        document.querySelector(".flower1").style.top = "0px"
        document.querySelector(".flower2").style.top = "-200px"
        document.querySelector(".flower3").style.top = "400px"
        document.querySelector(".flower3").style.right = "400px"
        document.querySelector(".flower4").style.right = "700px"
        document.querySelector("#top-right-leaf").style.right = "-200px"
        document.querySelector("#bottom-right-leaf").style.right = "-100px"
        document.querySelector(".nail-img").style.top = "-400px"
        document.querySelector(".about-content").style.opacity = "0"
        console.log("came from about")
        curr = "home"
    }
    else if (curr == "gallery"){
        document.querySelector(".welc").innerHTML = "WELCOME!"
        document.querySelector(".ask").style.visibility = "visible"
        document.querySelector(".flower1").style.right = "0px"
        document.querySelector(".flower1").style.top = "0px"
        document.querySelector(".flower2").style.top = "-200px"
        document.querySelector(".flower3").style.top = "400px"
        document.querySelector(".flower3").style.right = "400px"
        document.querySelector(".flower4").style.right = "700px"
        document.querySelector("#top-right-leaf").style.right = "-200px"
        document.querySelector("#bottom-right-leaf").style.right = "-100px"
        document.querySelector(".nail-img").style.top = "-400px"
        document.querySelector(".gallery-content").style.right = "-900px"
        console.log("came from gallery")
        curr = "home"
    }
    else if (curr == "contact"){
        document.querySelector(".welc").innerHTML = "WELCOME!"
        document.querySelector(".ask").style.visibility = "visible"
        document.querySelector(".flower1").style.right = "0px"
        document.querySelector(".flower1").style.top = "0px"
        document.querySelector(".flower2").style.top = "-200px"
        document.querySelector(".flower3").style.top = "400px"
        document.querySelector(".flower3").style.right = "400px"
        document.querySelector(".flower4").style.right = "700px"
        document.querySelector("#top-right-leaf").style.right = "-200px"
        document.querySelector("#bottom-right-leaf").style.right = "-100px"
        document.querySelector(".nail-img").style.top = "-400px"
        document.querySelector(".contact-content").style.right = "-900px"
        console.log("came from contact")
        curr = "home"
    }
    console.log(curr)
}
function serv() {
    if (curr == "home"){
        document.querySelector(".welc").innerHTML = "THE ULTIMATE BEAUTY EXPERIENCE"
        document.querySelector(".ask").style.visibility = "hidden"
        document.querySelector(".flower1").style.right = "-350px"
        document.querySelector(".flower1").style.top = "310px"
        document.querySelector(".flower2").style.top = "-710px"
        document.querySelector(".flower3").style.top = "-170px"
        document.querySelector(".flower3").style.right = "-230px"
        document.querySelector(".flower4").style.right = "1870px"
        document.querySelector("#top-right-leaf").style.right = "-1100px"
        document.querySelector("#bottom-right-leaf").style.right = "-1130px"
        document.querySelector(".nail-img").style.top = "300px"
        document.querySelector(".serv-hide-scroll").style.top = "200px"
        console.log("came from home")
        curr = "service"
    }
    else if (curr == "about"){
        document.querySelector(".welc").innerHTML = "THE ULTIMATE BEAUTY EXPERIENCE"
        document.querySelector(".ask").style.visibility = "hidden"
        document.querySelector(".about-content").style.opacity = "0"
        document.querySelector(".serv-hide-scroll").style.top = "200px"
        console.log("came from about")
        curr = "service"
    }
    else if (curr == "gallery"){
        document.querySelector(".welc").innerHTML = "THE ULTIMATE BEAUTY EXPERIENCE"
        document.querySelector(".ask").style.visibility = "hidden"
        document.querySelector(".gallery-content").style.right = "-900px"
        document.querySelector(".serv-hide-scroll").style.top = "200px"
        console.log("came from gallery")
        curr = "service"
    }
    else if (curr == "contact"){
        document.querySelector(".welc").innerHTML = "THE ULTIMATE BEAUTY EXPERIENCE"
        document.querySelector(".ask").style.visibility = "hidden"
        document.querySelector(".serv-hide-scroll").style.top = "200px"
        document.querySelector(".contact-content").style.right = "-900px"
        console.log("came from contact")
        curr = "service"
    }
    console.log(curr)
}

function about(){
    if (curr == "home"){
        document.querySelector(".welc").innerHTML = "THE ULTIMATE BEAUTY EXPERIENCE"
        document.querySelector(".ask").style.visibility = "hidden"
        document.querySelector(".flower1").style.right = "-350px"
        document.querySelector(".flower1").style.top = "310px"
        document.querySelector(".flower2").style.top = "-710px"
        document.querySelector(".flower3").style.top = "-170px"
        document.querySelector(".flower3").style.right = "-230px"
        document.querySelector(".flower4").style.right = "1870px"
        document.querySelector("#top-right-leaf").style.right = "-1100px"
        document.querySelector("#bottom-right-leaf").style.right = "-1130px"
        document.querySelector(".nail-img").style.top = "300px"
        document.querySelector(".about-content").style.opacity = "1"
        console.log("came from home")
        curr = "about"
    }
    else if (curr == "service"){
        document.querySelector(".welc").innerHTML = "THE ULTIMATE BEAUTY EXPERIENCE"
        document.querySelector(".ask").style.visibility = "hidden"
        document.querySelector(".about-content").style.opacity = "1"
        document.querySelector(".serv-hide-scroll").style.top = "-900px"
        console.log("came from service")
        curr = "about"
    }
    else if (curr == "gallery"){
        document.querySelector(".welc").innerHTML = "THE ULTIMATE BEAUTY EXPERIENCE"
        document.querySelector(".ask").style.visibility = "hidden"
        document.querySelector(".about-content").style.opacity = "1"
        document.querySelector(".gallery-content").style.right = "-900px"
        console.log("came from gallery")
        curr = "about"
    }
    else if (curr == "contact"){
        document.querySelector(".welc").innerHTML = "THE ULTIMATE BEAUTY EXPERIENCE"
        document.querySelector(".ask").style.visibility = "hidden"
        document.querySelector(".about-content").style.opacity = "1"
        document.querySelector(".contact-content").style.right = "-900px"
        console.log("came from contact")
        curr = "about"
    }
    console.log(curr)
}
function gallery(){
    if (curr == "home"){
        document.querySelector(".welc").innerHTML = "WELCOME!"
        document.querySelector(".flower1").style.right = "-350px"
        document.querySelector(".flower1").style.top = "310px"
        document.querySelector(".flower2").style.top = "-710px"
        document.querySelector(".flower3").style.top = "-170px"
        document.querySelector(".flower3").style.right = "-230px"
        document.querySelector(".flower4").style.right = "1870px"
        document.querySelector("#top-right-leaf").style.right = "-1100px"
        document.querySelector("#bottom-right-leaf").style.right = "-1130px"
        document.querySelector(".nail-img").style.top = "300px"
        document.querySelector(".gallery-content").style.right = "250px"
        console.log("came from home")
        curr = "gallery"
    }
    else if (curr == "about"){
        document.querySelector(".welc").innerHTML = "WELCOME!"
        document.querySelector(".about-content").style.opacity = "0"
        document.querySelector(".gallery-content").style.right = "250px"
        console.log("came from about")
        curr = "gallery"
    }
    else if (curr == "service"){
        document.querySelector(".welc").innerHTML = "WELCOME!"
        document.querySelector(".serv-hide-scroll").style.top = "-900px"
        document.querySelector(".gallery-content").style.right = "250px"
        console.log("came from service")
        curr = "gallery"
    }
    else if (curr == "contact"){
        document.querySelector(".welc").innerHTML = "WELCOME!"
        document.querySelector(".contact-content").style.right = "-900px"
        document.querySelector(".gallery-content").style.right = "250px"
        console.log("came from contact")
        curr = "gallery"
    }
    console.log(curr)
}
function contact(){
    if (curr == "home"){
        document.querySelector(".welc").innerHTML = "WAYS TO REACH OUT"
        document.querySelector(".ask").style.visibility = "hidden"
        document.querySelector(".flower1").style.right = "-350px"
        document.querySelector(".flower1").style.top = "310px"
        document.querySelector(".flower2").style.top = "-710px"
        document.querySelector(".flower3").style.top = "-170px"
        document.querySelector(".flower3").style.right = "-230px"
        document.querySelector(".flower4").style.right = "1870px"
        document.querySelector("#top-right-leaf").style.right = "-1100px"
        document.querySelector("#bottom-right-leaf").style.right = "-1130px"
        document.querySelector(".nail-img").style.top = "300px"
        document.querySelector(".contact-content").style.right = "320px"
        curr = "contact"
    }
    else if (curr == "about"){
        document.querySelector(".welc").innerHTML = "WAYS TO REACH OUT"
        document.querySelector(".ask").style.visibility = "hidden"
        document.querySelector(".about-content").style.opacity = "0"
        document.querySelector(".contact-content").style.right = "320px"
        console.log("came from about")
        curr = "contact"
    }
    else if (curr == "gallery"){
        document.querySelector(".welc").innerHTML = "WAYS TO REACH OUT"
        document.querySelector(".ask").style.visibility = "hidden"
        document.querySelector(".gallery-content").style.right = "-900px"
        document.querySelector(".contact-content").style.right = "320px"
        console.log("came from gallery")
        curr = "contact"
    }
    else if (curr == "service"){
        document.querySelector(".welc").innerHTML = "WAYS TO REACH OUT"
        document.querySelector(".ask").style.visibility = "hidden"
        document.querySelector(".serv-hide-scroll").style.top = "-900px"
        document.querySelector(".contact-content").style.right = "320px"
        console.log("came from service")
        curr = "contact"
    }
    console.log(curr)
}

