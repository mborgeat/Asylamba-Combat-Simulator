// ==UserScript==
// @name         simulator user script
// @version      0.0.1
// @description  simulator user script
// @author       ChickenStorm
// @match        http://game.asylamba.com/beta/fleet/view-spyreport*
// @match        https://dl.dropboxusercontent.com/u/110049848/Projecet_script_public/*
// @grant        none
// ==/UserScript==

var versionUserScript = "0.0.1";

var d = document.getElementsByTagName("span");
function setOnClickFunction(){
    
    var regExp = new RegExp("^commander full show*");
    
    for(var i in d){
        
        if (regExp.test(d[i].className)) {
            
            
            d[i].onclick = function(event){
                //******
                
                var temp = this["outerHTML"]
                
                //var temp = ""
                const SEARCH_TEXT = "data-army=\"[";
                
                var pos = temp.indexOf(SEARCH_TEXT) + SEARCH_TEXT.length;
                
                temp = temp.substring(pos,temp.length-1);
                
               
                var pos2 = temp.indexOf("]\">");
                temp = temp.substring(0,pos2);
                window.open("https://dl.dropboxusercontent.com/u/110049848/Projecet_script_public/Asylamba_project_online_launcher.html?d=" + temp +";");
                //**********
               
            };
        }
    }
    
}

/*function getVersionUS() {
    return version;
}*/


function messageForSimulator(){
    
    document.getElementById("UserScriptMessage").innerHTML = "";
    try{
        if (versionUserScript == userScriptLastVersion) {
            $("generalInfos").innerHTML += "user script &agrave; jour.";
        }
        else{
            $("generalInfos").innerHTML += "l'user script n'est pas &agrave; jour. T&eacute;l&eacute;chargez le <a href='https://github.com/ChickenStorm/Asylamba-Combat-Simulator/raw/master/userScript/simulator_user_script.user.js'>ici</a>.";
            
        }
    }
    catch(e){
        
    }
    
    /*
        if (getVersionUS() == userScriptLastVersion) {
            $("generalInfos").innerHTML += "user script &agrave; jour."
        }
        else{
            $("generalInfos").innerHTML += "l'user script n'est pas &agrave; jour. T&eacute;l&eacute;chargez le <a href='https://github.com/ChickenStorm/Asylamba-Combat-Simulator/raw/master/userScript/simulator_user_script.user.js'>ici</a>."
        }
    */
    
}

//##############################################################################################################################################################################


var regExpUrlAsylamba = new RegExp("^http://game.asylamba.com/beta/fleet/view-spyreport*");
var regExpUrlSimulator = new RegExp("^https://dl.dropboxusercontent.com/u/110049848/Projecet_script_public/*");

if (regExpUrlAsylamba.test(window.location.href)) {
    setOnClickFunction();
}
else if (regExpUrlSimulator.test(window.location.href)) {
    //messageForSimulator();
    setTimeout(messageForSimulator,0);
    
}

