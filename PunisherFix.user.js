// ==UserScript==
// @name         Fix punisher being in the way on chat report
// @version      0.1
// @author       _Rikardo_
// @match        https://goliath.hypixel.net/chatreports
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// ==/UserScript==

var version = 0.1;
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (request.readyState == XMLHttpRequest.DONE) {
        var updatedScriptVersion = request.responseText;
        if(version < updatedScriptVersion)
        {
            console.log("Update script");
            window.location.href = "https://raw.githubusercontent.com/Rikeardo/PunisherFix/master/PunisherFix.user.js";
        }
    }
};
request.open('GET', 'https://raw.githubusercontent.com/Rikeardo/PunisherFix/master/version.json', true);
request.send(null);

$('.uk-width-1-4:first').css('z-index','1');
$('.uk-width-2-4:first').css('z-index','2');
$('#previousMutes:first').css('z-index','2');
