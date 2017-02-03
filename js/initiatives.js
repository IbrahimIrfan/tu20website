
class Initiative {
    constructor(id, title, desc, imgpath) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.imgpath = imgpath;
        allInitiatives.push(this);
    }
}

function addInitiative(init){
  var initHTML = "<div class='init' id='" + init.id + "'><h1 id='initTitle'>" + init.title + "</h1><br>";
  initHTML += "<img width='80%' src='" + init.imgpath + "'>";
  initHTML += "<div id='initDescWrapper'><div id='initDesc'>" + init.desc + "</div></div>";
  initHTML += "</div>";
  $('.initiatives').append(initHTML);
}

var allInitiatives = [];
cup = new Initiative("cupInit", "TU20 Cup", "Teams of 2-6 students will work with the help of a mentor over 2 months to innovate a solution to the yearly theme: how can we make education better with technology?" , "img/CupLogo.jpg");
chapters = new Initiative("chaptersInit", "Chapters", "We are working closely with schools in Halton to create a strong entrepreneurial community, host guest speakers, and run events in schools", "img/CupLogo.jpg");
pitch = new Initiative("pitchInit", "Pitching", "This multi-part event will guide TU20s through a series of Learning Stations focused on networking skills, and open them up to internship opportunities in their fields of interest.", "img/CupLogo.jpg");

for (i = 0; i < allInitiatives.length; i++) {
    var currentInit = allInitiatives[i];
    addInitiative(currentInit);
}
