class Member {
    constructor(name, bio, imgpath) {
        this.name = name;
        this.bio = bio;
        this.imgpath = imgpath;
        allMembers.push(this);
    }
}

function addMember(member) {
    var memberHTML = "<div class='fadeIn headshot' id='" + member.name.toLowerCase() + "Picture'>";
    memberHTML += "<img src='img/headshots/" + member.imgpath + "' pic='" + member.imgpath + "'>";
    memberHTML += "<figcaption>" + member.name + "</figcaption></div>";
    if (member.name == "Kalli") {
        memberHTML += "<br>";
    }
    $('.headshotWrapper').append(memberHTML);
}

var allMembers = [];
ella = new Member("Ella", "Leader of the TechU20 team, keeping things organised and on schedule. Second year Mechatronics Engineering student at the University of Waterloo aspiring to create robots to change the world.", "ella_headshot.jpg");
denys = new Member("Denys", "Manages the school chapters program and liaison for SH Colab. Second year Comp sci student at the University of Toronto who enjoys debate and outdoor activities. Builds software, products and visions.", "denys_headshot.png");
jean = new Member("Jean", "Our money manager! First year Management student at University of Toronto Mississagua working hard to achieve her goals. She is passionate about finance, baking and sports.", "jean_headshot.jpg");
kalli = new Member("Kalli", "Organizer of the workshop and pitching events. Grade 12 student at Lorne Park Secondary School who loves robotics and strives to be an engineer.", "kalli_headshot.png");
ibrahim = new Member("Ibrahim", "TU20 Cup Exec, Web Developer, and Chapter President at Iroquois Ridge. He enjoys making websites and mobile apps, and plays soccer in his spare time.", "ibrahim_headshot.png");
jordan = new Member("Jordan", "Job Shadowing Executive for TU20. Currently the grade 12 Prime Minister at King's Christian Collegiate and with a passion for software development and entrepreneurship.", "jordan_headshot.png");
sidra = new Member("Sidra", "Our Visual Content person! She loves to make things pretty! Her passion for the environment and world issues inspires her to use art and design to change the world.", "sidra_headshot.png");
yousuf = new Member("Yousuf", "Marketing Executive for TU20. Currently a grade 12 student at Craig Kielburger Secondary School with a passion for anything to do with film and broadcast.", "yousuf_headshot.png");

for (i = 0; i < allMembers.length; i++) {
    var member = allMembers[i];
    addMember(member);
}

$(document).on("ready", function() {
    function slideName(nameClicked, headClicked, height, upOrDown) {
        var heightStr = upOrDown + '=' + (height + 35) + 'px';
        nameClicked.delay(500).animate({
            'top': heightStr
        }, 500);
        if (upOrDown == "-") {
            for (i = 0; i < allMembers.length; i++) {
                if (allMembers[i].name == nameClicked.html()) {
                    nameClicked.after('<div class="bio" id="' + allMembers[i].name.toLowerCase() + 'Bio">' + allMembers[i].bio + '</div>');
                    $('#' + allMembers[i].name.toLowerCase() + 'Bio').css('top', heightStr).hide().delay(500).fadeIn(500);
                }
            }
        }
    }

    function sameHeadClicked(head) {
        head
    }

    var prevHead = false;
    var prevName = false;
    $('.headshot').on("click", function(e) {
        var headClicked = $(e.currentTarget.children[0]);
        var nameClicked = $(e.currentTarget.children[1]);
        if (prevHead != false) {
            slideName(prevName, prevHead, prevHead.height(), "+");
            prevHead.delay(500).animate({
                'opacity': 1
            }, 500);
            $('#' + prevName.html().toLowerCase() + 'Bio').fadeOut(500);
            if (nameClicked.html() == prevName.html()) {
                prevHead = false;
                return;
            }
        }
        prevHead = headClicked;
        prevName = nameClicked;
        headClicked.animate({
            'opacity': 0
        }, 500);
        slideName(nameClicked, headClicked, headClicked.height(), "-");
    });
});
