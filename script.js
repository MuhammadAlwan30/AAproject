// bikin variable buat naro angka
let user, computer ,nyawa = 3;
// disable input selain angka
function hanyaAngka(event) {
    var angka = (event.which) ? event.which : event.keyCode
    if (angka != 46 && angka > 31 && (angka < 48 || angka > 57))
        return false;
    return true;
}
// mendapatkan input user
let nomor = document.querySelector("#nomor");
const p = document.querySelector("p#info");
const life = document.querySelector('#nyawa');
life.innerHTML = 'nyawa anda: ' + nyawa;

// membuat angka random
function acak(){
    var hasil = Math.round(Math.random()*9);
    return computer = hasil;
}

nomor.addEventListener('change', function(){
        var nilai = nomor.value;
        user = nilai;
        acak();
        game()
        nomor.value = "";
    })
// membuat kondisi menang, kalah atau seri
function game(){
    
    if( user == computer){
        p.style.backgroundColor = 'lightgreen';
        p.innerHTML = "selamat anda benar!!!";
        nyawa++
        life.innerHTML = 'nyawa anda: ' + nyawa;
    }else{
        nyawa--
        life.innerHTML = 'nyawa anda: ' + nyawa;
        if(nyawa == 0){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })

        }
        p.style.backgroundColor = 'red';
        p.innerHTML = user + " bukanlah angka yg benar tetapi " + computer ;
    }
}
