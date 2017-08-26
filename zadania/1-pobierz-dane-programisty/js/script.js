

$("#btn1").click(function(){
    
var dane = [{
   "imie": "Piotr",
   "zawod": "Programista",
   "nazwisko": "Lewinski",
   "firma": "Akademia108"
}]

$.getJSON("http://echo.jsontest.com/imie/Piotr/nazwisko/Lewinski/zawod/Programista/firma/Akademia108", function(wynik){
$.each(wynik, function(index, wartosc){
    
$("div").append(index + ": " + wartosc + "\n");
        });
    });
});