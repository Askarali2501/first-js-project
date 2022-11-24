document.querySelector('.tugma').addEventListener('click', function(){
    var ekran = document.querySelector('.ekran');
    ekran.value = parseInt(ekran.value) + 1;
});

document.querySelector('.tugma2').addEventListener('click', function(){
    document.querySelector('.ekran').value = 0
} )