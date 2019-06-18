$( document ).ready(function welcome() {
	alert("bienvenue")
   $("#welcome").html('<h4>Bienvenue, <br> soyez prêt à renouveler de nouveaux défis !</h4>');


function getUsername() {

    var  user = prompt("Veuillez rentrez votre nom:", "");
 
    return user
}

 function welcome() {
    var name= getUsername();
    $("#welcome").html('<h4>Bienvenue '+name+', <br> soyez pret à renouveler de nouveaux défis ! </h4>');

};

welcome();

});