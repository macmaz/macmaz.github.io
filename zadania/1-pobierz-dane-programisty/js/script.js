$("#btn1").click(function(){
    
$.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", { function(wynik){
        
$.each(wynik, function(index, wartosc){
    
$("#dane-programisty").append(index + ": " + wartosc + "\n");
        });
}
});
});