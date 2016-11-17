//about - start
function about() {
			window.alert ("SmallText - The free, lightweight, text editor for Chrome devices.\n\nMade by Sleepy Foxie.")
		};
//about - end

//save - start
function save() {

var txt = document.getElementById("txt").value;
	
                var textToWrite = document.getElementById("txt").value;
                var textFileAsBlob = new Blob([textToWrite], {
                    type:"text/plain"
					//add function to make files save as html files, using if/else and .substring of textarea
                });
                var fileNameToSaveAs = prompt("Name your file");

                var downloadLink = document.createElement("a");
                downloadLink.download = fileNameToSaveAs;
                {
                    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
                }
                downloadLink.click();
            };
//save - end


//fonts - start
function fntcrn() {
	
	document.getElementById("txt").style.fontFamily = "Courier New"
		
};

function fntarl() {
	document.getElementById("txt").style.fontFamily = "Arial"

};

function fntvrdna() {
	document.getElementById("txt").style.fontFamily = "Verdana"

};
//fonts - end


//text sizes - start
function smalltext() {
	document.getElementById("txt").style.fontSize = "12px";

};

function normaltext() {
	document.getElementById("txt").style.fontSize = "16px";

};

function largetext() {
	
	document.getElementById("txt").style.fontSize = "26px";
	
};

function hugetext() {
	document.getElementById("txt").style.fontSize = "36px";

};
//text sizes - end

//themes - start
function lighttheme() {
	
	document.getElementById("bar").style.backgroundColor = "white";
	
		document.getElementById("head").style.color = "orange";

	 
	document.body.style.backgroundColor = "orange";
	
	var btnclr = document.getElementsByClassName("button");
	var i;
	for (i = 0; i < btnclr.length; i++) {
		 btnclr[i].style.backgroundColor = "orange";
		 }
	
	var btnclr = document.getElementsByClassName("button");
	var i;
	for (i = 0; i < btnclr.length; i++) {
		 btnclr[i].style.color = "white";
		 }
	
	var popup = document.getElementsByClassName("poptitle");
	var i;
	for (i = 0; i < popup.length; i++) {
		 popup[i].style.color = "orange";
	}
	
	var popup = document.getElementsByClassName("popup");
	var i;
	for (i = 0; i < popup.length; i++) {
		 popup[i].style.backgroundColor = "#cc8400";
	}
	
	var popup = document.getElementsByClassName("popup");
	var i;
	for (i = 0; i < popup.length; i++) {
		 popup[i].style.border = "13px solid white";
	}
	
	document.getElementById("txt").style.backgroundColor = "#F3EBA3"
	
	document.getElementById("txt").style.color = "black"

	
	
};


function darktheme() {
	
	document.getElementById("bar").style.backgroundColor = "black";

		document.getElementById("head").style.color = "#623f00";
 
	document.body.style.backgroundColor = "#333333";
	
	var btnclr = document.getElementsByClassName("button");
	var i;
	for (i = 0; i < btnclr.length; i++) {
		 btnclr[i].style.backgroundColor = "#333333";
		 }
	
		var btnclr = document.getElementsByClassName("button");
	var i;
	for (i = 0; i < btnclr.length; i++) {
		 btnclr[i].style.color = "#999999";
		 }
	
		var popup = document.getElementsByClassName("poptitle");
	var i;
	for (i = 0; i < popup.length; i++) {
		 popup[i].style.color = "#623f00";
	}
	
	var popup = document.getElementsByClassName("popup");
	var i;
	for (i = 0; i < popup.length; i++) {
		 popup[i].style.backgroundColor = "#1a1a1a";
	}
	
	var popup = document.getElementsByClassName("popup");
	var i;
	for (i = 0; i < popup.length; i++) {
		 popup[i].style.border = "13px solid #0d0d0d";
	}
	
	document.getElementById("txt").style.backgroundColor = "black";
	
	document.getElementById("txt").style.color = "#999999"
	
};
	


function standardtheme() {
	document.getElementById("bar").style.backgroundColor = "black";
	
		document.getElementById("head").style.color = "orange";

	
	document.body.style.backgroundColor = "#595959";
	
	var btnclr = document.getElementsByClassName("button");
	var i;
	for (i = 0; i < btnclr.length; i++) {
		 btnclr[i].style.backgroundColor = "#595959";
		 }
	
	var btnclr = document.getElementsByClassName("button");
	var i;
	for (i = 0; i < btnclr.length; i++) {
		 btnclr[i].style.color = "white";
		 }
	
	var popup = document.getElementsByClassName("poptitle");
	var i;
	for (i = 0; i < popup.length; i++) {
		 popup[i].style.color = "orange";
	}
	
	var popup = document.getElementsByClassName("popup");
	var i;
	for (i = 0; i < popup.length; i++) {
		 popup[i].style.backgroundColor = "#898989";
	}
	
	var popup = document.getElementsByClassName("popup");
	var i;
	for (i = 0; i < popup.length; i++) {
		 popup[i].style.border = "13px solid black";
	}
	
	document.getElementById("txt").style.backgroundColor = "darkkhaki"
	
	document.getElementById("txt").style.color = "black"

	
};
//themes - end

//HTML Templates - start


function htmlmodern() {
	
	var modern = "<!DOCTYPE html>\n<html>\n<head>\n<style> \n*{\nbackground-color: #272727;\nfont-family: Arial;\nfont-size: 18px;\n}\nbody{\nborder: 3px solid lightblue;\n}\nh1{\nfont-size: 20px;\ntext-align: center;\n} \n<title></title>\n</head>\n<body>\n</html>"
	
	document.getElementById("txt").value = modern
	
};

function htmlminimalist() {
	
};

function htmlresume() {
	
};

