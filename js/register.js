function registrieren(){

    let benutzername = document.querySelector("#benutzername").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;


    let formData = new FormData();
    formData.append('benutzername', benutzername);
    formData.append('email', email);
    formData.append('password', password);

    fetch("https://110018-2.web.fhgr.ch/php/register.php",
        {
            body: formData,
            method: "post",
        })

        .then((response) => {

            return response.text();

        })
        .then((data) => {

        document.querySelector('#nachricht').innerHTML = data;

        })
}


function login(){

    window.location = "/login.html";

}
