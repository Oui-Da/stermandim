//rules popup
var Rmodal = document.getElementById("rules");
var Rbtn  = document.getElementById("bt_rules");
var Rspan = document.getElementsByClassName("Rclose")[0];

Rbtn.onclick = function() {
    Rmodal.style.display = "block";
}

Rspan.onclick = function() {
    Rmodal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == Rmodal) {
        Rmodal.style.display = "none";
    }
}

//parameter popup
var Pmodal = document.getElementById("parameter");
var Pbtn  = document.getElementById("bt_parameter");
var Pspan = document.getElementsByClassName("Pclose")[0];

Pbtn.onclick = function() {
    Pmodal.style.display = "block";
}

Pspan.onclick = function() {
    Pmodal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == Pmodal) {
        Pmodal.style.display = "none";
    }
}


function DLtheme(){
    var element = document.body;
    element.classList.toggle("light_mode");
}



//about popup
var Amodal = document.getElementById("about");
var Abtn  = document.getElementById("bt_about");
var Aspan = document.getElementsByClassName("Aclose")[0];

Abtn.onclick = function() {
    Amodal.style.display = "block";
}

Aspan.onclick = function() {
    Amodal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == Amodal) {
        Amodal.style.display = "none";
    }
}