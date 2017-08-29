$("#btn1").click(function(){
    
$.getJSON("http://echo.jsontest.com/imie/Piotr/nazwisko/Lewinski/zawod/Programista/firma/Akademia108", { function(wynik){
        
$.each(wynik, function(index, wartosc){
    
$("#dane-programisty").append(index + ": " + wartosc + "\n");
        });
}
});
});