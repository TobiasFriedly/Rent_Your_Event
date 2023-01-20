PruefeEvent();

getUserStart();

function PruefeEvent() {

    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    let formData = new FormData();
    formData.append('userID', userID);

    fetch("https://110018-2.web.fhgr.ch/php/getUserEvent.php",
        {
            body: formData,
            method: "post",
            headers: {

                'Authorization': 'Basic ' + btoa(userID + ':' + token),

            }
        })

        .then((res) => {

            if (res.status >= 200 && res.status < 300) {

                return res.json();

            } else {

                return;

            }

        })
        .then((data) => {



            if (data.length == 0) {

                document.querySelector('#newEvent').innerHTML = "Location erstellen";
    
            } else {

                document.querySelector('#newEvent').innerHTML = "Location bearbeiten";

            }
        })
}




function getUserStart() {

    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    let formData = new FormData();
    formData.append('userID', userID);

    fetch("https://110018-2.web.fhgr.ch/php/getUser.php",
        {
            body: formData,
            method: "post",
            headers: {

                'Authorization': 'Basic ' + btoa(userID + ':' + token),

            }
        })

        .then((res) => {

            if (res.status >= 200 && res.status < 300) {

                return res.json();

            } else {

                document.getElementById("logout").innerHTML = "Login";
                document.getElementById("logout").setAttribute("onclick", "login()");
                return;

            }

        })
        .then((data) => {

            document.querySelector("#username").innerHTML = data[0].name;

        })
}





function logout(){

    localStorage.clear();
    alert("Du wurdest erfolgreich abgemeldet!")
    window.location.href = "https://110018-2.web.fhgr.ch/";

}

function login(){

    window.location = "/login.html";

}

