//HET TOTAAL AANTAL AAN ABSTRACTE/FIGURATIEVE SCHILDERIJEN
var abstrTotal = 20;
var figTotal = 6;


//FADE IN PHOTO------------------------------------------------------------
function fadeIn() {
	var menu = document.getElementById('keuze_menu');
	menu.style.opacity = "1";
}


//CONTACTFORM COUNTER------------------------------------------------------------
function countChar() {
	var maxChars = 500;
	var text = document.getElementById('messageInput').value;
	var currentChars = text.length;
	var count = maxChars - currentChars;

	var linebreaks = text.match(/(\r\n|\n|\r)/g);
	var addition = 0;

	if (linebreaks != null) {
		addition = linebreaks.length;
	}
		
	document.getElementById('charLeft').innerHTML = count - addition;
}

//INITIALISEER HET TOTAAL AANTAL FOTO'S OP DE BETREFFENDE PAGINA'S (ZODAT DE LEFT & RIGHT ARROW KEY GELIJK WERKEN)
var total;
$(document).ready(function(){
	if (window.location.href.slice(-10) === "atief.html") {
		total = figTotal; //verander dit als er meer/minder foto's zijn
	} else if (window.location.href.slice(-10) === "tract.html") {
		total = abstrTotal; //verander dit als er meer/minder foto's zijn
	}
	console.log("Total images on this page = " + total);
})


//SLIDESHOW FUNCTIES------------------------------
var image_holder = document.getElementById('image_holder');
var info_holder = document.getElementById('info_holder');
var imagecount = 12; //welke image wordt als eerste gedisplayt? (deze moet overeen komen met de image die in figuratief.html/abstract.html staat)
var stijl;
var infoLijst;


//VERANDER FOTO
function slideImg() {
	var Image = document.getElementById('img');

	if (imagecount > total) {
		imagecount = 1;
	}

	if (imagecount < 1) {
		imagecount = total;
	}

	Image.src = "photos/" + stijl + "/photo" + imagecount + ".jpg";
	console.log("imagecount (to set image) = " + imagecount);

	setTimeout(fadeInImg, 0);
}

//FADE OUT FOTO EN INFO
function fadeOut(x, stijl, total, infoLijst) {
	this.stijl = stijl;
	this.total = total;
	this.infoLijst = infoLijst;
	imagecount += x;
	image_holder.style.opacity = 0;
	if (screen.width < 1000) {
		info_holder.style.margin = "auto";
	} else {
		info_holder.style.margin = "150px 0 0 0";
	}
	info_holder.style.opacity = 0;
	setTimeout(slideImg, 500);
}

//FADE IN FOTO
function fadeInImg() {
	image_holder.style.opacity = 1;
	setTimeout(fadeInInfo, 700);
}

//FADE IN INFO
function fadeInInfo() {

	if (screen.width < 1000) {
		info_holder.style.margin = "auto"
		info_holder.style.opacity = 1;
		changeInfo(imagecount);
	} else {
		info_holder.style.margin = "0 0 0 0";
		info_holder.style.opacity = 1;	
		changeInfo(imagecount);
	}
}

var arrayMsg = true; //eenmaal in de console printen welke array wordt gebruikt, daarna arrayMsg = false
//KOPPELEN INFO AAN FOTO FUNCTIE
function changeInfo(index) {
	var title = document.getElementById('title');
	var afm = document.getElementById('afm');
	var tech = document.getElementById('tech');
	var jaar = document.getElementById('jaar')
	var prijs = document.getElementById('prijs');

	index--;

	//LIJST VAN INFO VOOR ABSTRACTE KUNST
	var abstracten = [["'Amarillo'", "40 x 60 (cm)", "Acryl op doek", "YYYY", "Verkocht"],		//INFO BIJ FOTO 1
		["'Idiosyncratic Colouring'", "50 x 50 (cm)", "Acryl op doek", "2012", "550,- (\&#8364)"],	//INFO BIJ FOTO 2
		["'The Suggestion Of Depth'", "100 x 80 (cm)", "Acryl op doek", "YYYY", "600,- (\&#8364)"],		//INFO BIJ FOTO 3
		["'RED'", "80 x 60 (cm)", "Acryl op doek", "YYYY", "450,- (\&#8364)"],						//ETC ETC
		["'Colourful Gravity'", "50 x 70 (cm)", "Acryl op doek", "YYYY", "550,- (\&#8364)"],
		["'Beyond Natural (III)'", "70 x 50 (cm)", "Acryl op doek", "YYYY", "650,- (\&#8364)"],
		["'Non Intersecting Lines'", "50 x 50 (cm)", "Acryl op doek", "YYYY", "425,- (\&#8364)"],
		["'Prevailing Green'", "50 x 60 (cm)", "Acryl op doek", "YYYY", "495,- (\&#8364)"]
		["'Zonder titel'", "60 x 40 (cm)", "Mixed media", "YYYY", "300,- (\&#8364)"],
		["'Green Forest'", "70 x 50 (cm)", "Acryl op doek", "YYYY", "550,- (\&#8364)"],
		["'Imagination'", "50 x 50 (cm)", "Acryl op doek", "YYYY", "450,- (\&#8364)"],
		["'Beyond Natural (I)'", "80 x 80 (cm)", "Acryl op doek", "YYYY", "500,- (\&#8364)"],
		["'Mixed Up'", "50 x 50 (cm)", "Mixed media", "YYYY", "450,- (\&#8364)"],
		["'Early Things'", "80 x 80 (cm)", "Mixed media", "YYYY", "650,- (\&#8364)"],
		["'RED - Volume II'", "70 x 30 (cm)", "Acryl op doek", "YYYY", "Verkocht"],
		["'Roughness'", "60 x 80 (cm)", "Acryl op doek", "YYYY", "650,- (\&#8364)"],
		["'Out Of The Box, Part I'", "100 x 80 (cm)", "Acryl op doek", "YYYY", "750,- (\&#8364)"],
		["'Harsh Profile'", "50 x 60 (cm)", "Acryl op doek", "YYYY", "450,- (\&#8364)"],
		["'WYSII'", "50 x 60 (cm)", "Acryl op doek", "YYYY", "495,- (\&#8364)"],
		["'Early Things II'", "60 x 60 (cm)", "Acryl op doek", "Vóór 2010", "475,- (\&#8364)"]
	];

	//LIJST VAN INFO VOOR FIGURATIEVE KUNST
	var figuratieven = [["'Crazy Chick'", "60 x 60 (cm)", "Acryl op doek", "Vóór 2010", "475,- (\&#8364)"],			
		["'Koolzaadveld'", "70 x 50 (cm)", "Acryl op doek", "Vóór 2010", "Verkocht"],							
		["'Vos'", "60 x 80 (cm)", "Acryl op doek", "YYYY", "475,- (\&#8364)"],
		["'Scenery'", "50 x 50 (cm)", "Acryl op doek", "Vóór 2010", "425,- (\&#8364)"],
		["'Oehoe'", "40 x 50 (cm)", "Acryl op doek", "Vóór 2010", "N.t.k."],
		["'Owl'", "60 x 60 (cm)", "Acryl op doek", "Vóór 2010", "425,- (\&#8364)"]
	];


	//PAKT DE JUISTE LIJST OP BASIS VAN 'INFOLIJST' VARIABELE EN ACCEST DE JUISTE INDEXXEN.
	if (infoLijst == "abstracten") {
		title.innerHTML = abstracten[index][0];
		afm.innerHTML = abstracten[index][1];
		tech.innerHTML = abstracten[index][2];
		// jaar.innerHTML = abstracten[index][3]; // = jaartal, deze weglaten
		prijs.innerHTML = abstracten[index][4];
	} else if (infoLijst == "figuratieven") {		
		title.innerHTML = figuratieven[index][0];
		afm.innerHTML = figuratieven[index][1];
		tech.innerHTML = figuratieven[index][2];
		// jaar.innerHTML = figuratieven[index][3]; // = jaartal, deze weglaten
		prijs.innerHTML = figuratieven[index][4];
	}
	
}

//CHECK OF ARROWKEYS WORDEN GEDRUKT + START ADEQUATE FUNCTIE 
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
        	if (total === abstrTotal) { //wanneer het aantal fotos wordt veranderd, ook hier meeveranderen!
	            fadeOut(-1, 'abstract', abstrTotal, 'abstracten');
            } else if (total === figTotal) { //wanneer het aantal fotos wordt veranderd, ook hier meeveranderen!
            	fadeOut(-1, 'figuratief', figTotal, 'figuratieven');
            }
            break;
        case 39:
	        if (total === abstrTotal) { //wanneer het aantal fotos wordt veranderd, ook hier meeveranderen!
	            fadeOut(1, 'abstract', abstrTotal, 'abstracten');
            } else if (total === figTotal) { //wanneer het aantal fotos wordt veranderd, ook hier meeveranderen!
            	fadeOut(1, 'figuratief', figTotal, 'figuratieven');
            }
            break;
    }
};

//BEPAALDE INFO KOPPELEN AAN DE IMAGEOCUNT. ARRALIST MAKEN? INFO_HOLDER GEGEVENS = INFOLIST[IMAGECOUNT]?

//FUNCTIE VOOR EXTRA INFORMATIE UIT DE EXPOSITIETABEL
$(document).ready(function() {
    $('.extraRow').hide();    

    $(".tableRow").on('click', function() {
        var $extra = $(this).next(".extraRow");
        var $extra2 = $extra.next(".extraRow");
        var $extra3 = $extra2.next(".extraRow");
        $extra.toggle(250);
        $extra2.toggle(250);
        $extra3.toggle(250);
    });

    //PHONE VIEW ONLY
    //
	//MAKE MENU BUTTON CLICKABLE AND TOGGLE ANIMATION
	var obj = document.querySelectorAll('.menuBtn');
	for (i = obj.length-1; i >= 0; i--) {
		var toggle = obj[i];
		toggleSwitch(toggle);
	}

	function toggleSwitch(toggle) {
		toggle.addEventListener('click', function() {
			if (this.classList.contains('active') === true) {
				this.classList.remove('active');
			} else {
				this.classList.add('active');
			}
		})
	}

	//TOGGLE MENU INTERFACE WHEN MENU BUTTON IS CLICKED
	$('.menuBtn').click(function() {
		console.log("menu clicked");
		$('.menu').toggleClass('menuActive'); //toggle menu (INVISIBLE VS VISIBLE)
		$('.content').toggleClass('.contentHidden'); //hide underlaying content (so there is no more scroll bar)
	});

	//IF ON FIGURATIEF PAGE
	$(document).ready(function(){
		if (window.location.href.slice(-10) === "atief.html") {

			//ON SWIPE LEFT, GO BACK ONE IMAGE
			$("#img").on("swipeleft", function(event) {
				fadeOut(-1, 'figuratief', 16, 'figuratieven');
			});

			$("#img").on("swiperight", function(event) {
				fadeOut(1, 'figuratief', 20, 'figuratieven');
			});

			//ELSE IF ON ABSTRACT PAGE
		} else if (window.location.href.slice(-10) === "tract.html") {

			//ON SWIPE RIGHT, GO FORWARD ONE IMAGE
			$("#img").on("swipeleft", function(event) {
				fadeOut(-1, 'abstract', 16, 'abstracten');
			});

			$("#img").on("swiperight", function(event) {
				fadeOut(1, 'abstract', 20, 'abstracten');
			});
		}
	})	
});