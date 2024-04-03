/* Document   : ${name}
   Created on : ${date}, ${time}
   Author     : ${user} @eikonEMF
   Description: TODO complete this description
*/

$(document).ready(function(){


// Gère le hover sur les liens/images communautaire


$("#communauteFacebook").hover(function(){
        $('#communauteFacebook').addClass("communauteFacebookOn");
        $('#communauteFacebook').html("Facebook");
        $('#communauteFacebook').removeClass("communauteFacebookOff");
    },function(){
    	$('#communauteFacebook').addClass("communauteFacebookOff");
    	$('#communauteFacebook').html("");
    	$('#communauteFacebook').removeClass("communauteFacebookOn");
});

$("#communauteTwitter").hover(function(){
        $('#communauteTwitter').addClass("communauteTwitterOn");
        $('#communauteTwitter').html("Twitter");
        $('#communauteTwitter').removeClass("communauteTwitterOff");
    },function(){
    	$('#communauteTwitter').addClass("communauteTwitterOff");
        $('#communauteTwitter').html("Twitter");
    	$('#communauteTwitter').removeClass("communauteTwitterOn");
});


// Donne un aperçut des changements d'annonce en cliquant sur le texte

$("#annonce").toggle(function() {
		$("#annonce").html("Dans moins de 24h, le NeoCube sera disponible sur :");
		$("#voyant").addClass("soon");
	},function(){
		$("#annonce").html("Le NeoCube, c'est maintenant ou jamais :");
		$("#voyant").addClass("now");
});


// Gère les Fancybox

$("a#oubli").fancybox({
	'hideOnContentClick': false
});

$("a#inscriptionLink").fancybox({
	'hideOnContentClick': false
});

$("a#soumet").fancybox({
	'hideOnContentClick': false
});


})


