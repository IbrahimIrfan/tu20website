class Initiative {
    constructor(id, title, desc, imgpath) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.imgpath = imgpath;
        this.key = allInitiatives.length;
        allInitiatives.push(this);
    }
}

function addInitiative(init) {
    var initHTML = "<div class='init' id='" + init.id + "Init' key=" + init.key + "><h1 id='initTitle'>" + init.title + "</h1><br>";
    initHTML += "<img width='80%' src='" + init.imgpath + "'>";
    initHTML += "<div id='initDescWrapper'><div id='initDesc'>" + init.desc + "</div></div>";
    initHTML += "</div>";
    $('.initiatives').append(initHTML);
}

function displayInfo(initClicked) {
    $.fancybox({
        href: '#initPopup',
        width: 700,
        autoDimensions: false,
        autoSize: false,
        afterLoad: function() {
            this.content = "";
            this.inner.prepend("<center><h1 class='fancyTitle'>" + initClicked.title + "</h1></center>");
        },
        afterShow: function() {
        }
    });
}

//capitalize first letter of string
function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var allInitiatives = [];
cup = new Initiative("cup", "TU20 Cup", "Teams of 2-6 students will work with the help of a mentor over 2 months to innovate a solution to the yearly theme: how can we make education better with technology?", "img/CupLogo.jpg");
chapters = new Initiative("chapters", "Chapters", "We are working closely with schools in Halton to create a strong entrepreneurial community, host guest speakers, and run events in schools", "img/CupLogo.jpg");
pitch = new Initiative("pitch", "Pitching", "This multi-part event will guide TU20s through a series of Learning Stations focused on networking skills, and open them up to internship opportunities in their fields of interest.", "img/CupLogo.jpg");

for (i = 0; i < allInitiatives.length; i++) {
    addInitiative(allInitiatives[i]);
}

$('.init').on("click", function(e) {
    var initClicked = allInitiatives[$(e.currentTarget).attr("key")];
    displayInfo(initClicked);
});
