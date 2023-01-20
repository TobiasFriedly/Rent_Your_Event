var eventID;

getUserEvent();

PruefeEvent();

var input = document.getElementById("bild");
var img = document.getElementById("bild-vorschau");

input.addEventListener("change", function() {
  img.src = input.value;
});


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

function newEvent(){

    let name = document.querySelector("#name").value;
    let preis = document.querySelector("#preis").value;
    let bild = document.querySelector("#bild").value;
    let beschreibung = document.querySelector("#beschreibung").value;
    let ort = document.querySelector("#ort").value;

    let formData = new FormData();
    formData.append('name', name);
    formData.append('preis', preis);
    formData.append('bild', bild);
    formData.append('beschreibung', beschreibung);
    formData.append('ort', ort);


    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    formData.append('user', userID);

    fetch("https://110018-2.web.fhgr.ch/php/newEvent.php",
        {
            body: formData,
            method: "post",
            headers: {

                'Authorization': 'Basic ' + btoa(userID + ':' + token),

            }
        })

        .then((response) => {

            return response.text();

        })
        .then((data) => {

        document.querySelector('#nachricht').innerHTML = data;
        getUserEvent();
        document.querySelector('#button-neue').classList.add("hidden");
        })

}

function getUserEvent() {

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

                alert('Du musst dich anmelden, um fortzufahren. Wir leiten dich auf die Startseite weiter.');
                window.location.href = "https://110018-2.web.fhgr.ch/";

            }

        })
        .then((data) => {

            console.log(data);

            if (data.length == 0) {

                document.querySelector('#infoText').innerHTML = "Hier kannst du dein Event erstellen:"

                document.querySelector('#button-neue').classList.remove("hidden");

            } else {

                eventID = data[0].ID;

                document.querySelector('#infoText').innerHTML = "Hier kannst du dein Event bearbeiten:"

                document.querySelector('#button-aktualisieren').classList.remove("hidden");
                document.querySelector('#button-loeschen').classList.remove("hidden");

                document.querySelector('#name').value = data[0].name;
                document.querySelector('#preis').value = data[0].preis;
                document.querySelector('#beschreibung').value = data[0].beschreibung;
                document.querySelector('#ort').value = data[0].ort;
                document.querySelector('#bild').value = data[0].bild;
                document.querySelector('#bild-vorschau').src = data[0].bild;

            }
        })
}

function eventEdit() {

    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    let name = document.querySelector('#name').value;
    let preis = document.querySelector('#preis').value;
    let beschreibung = document.querySelector('#beschreibung').value;
    let ort = document.querySelector('#ort').value;
    let bild = document.querySelector('#bild').value;


    let formData = new FormData();
    formData.append('userID', userID);
    formData.append('name', name);
    formData.append('preis', preis);
    formData.append('beschreibung', beschreibung);
    formData.append('ort', ort);
    formData.append('bild', bild);


    formData.append('eventID', eventID);

    fetch("https://110018-2.web.fhgr.ch/php/EventEdit.php",
        {
            body: formData,
            method: "post",
            headers: {

                'Authorization': 'Basic ' + btoa(userID + ':' + token),

            }
        })

        .then((res) => {

            if (res.status >= 200 && res.status < 300) {

                return res.text();

            } else {

                alert('Du musst dich anmelden, um fortzufahren. Wir leiten dich auf die Startseite weiter.');
                window.location.href = "https://110018-2.web.fhgr.ch/";

            }

        })
        .then((data) => {

            document.querySelector('#nachricht').innerHTML = data;

        })
}

function deleteEvent() {

    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    let formData = new FormData();
    formData.append('userID', userID);
    formData.append('eventID', eventID);

    fetch("https://110018-2.web.fhgr.ch/php/deleteEvent.php",
        {
            body: formData,
            method: "post",
            headers: {

                'Authorization': 'Basic ' + btoa(userID + ':' + token),

            }
        })

        .then((res) => {

            if (res.status >= 200 && res.status < 300) {

                return res.text();

            } else {

                alert('Du musst dich anmelden, um fortzufahren. Wir leiten dich auf die Startseite weiter.');
                window.location.href = "https://110018-2.web.fhgr.ch/";

            }

        })
        .then((data) => {

            console.log(data);
            
            document.querySelector('#nachricht').innerHTML = data;

            document.querySelector('#button-neue').classList.remove("hidden");
            document.querySelector('#button-aktualisieren').classList.add("hidden");
            document.querySelector('#button-loeschen').classList.add("hidden");

            document.querySelector('#name').value = "";
            document.querySelector('#preis').value = "";
            document.querySelector('#beschreibung').value = "";
            document.querySelector('#ort').value = "";
            document.querySelector('#bild').value = "";

            document.querySelector('#bild-vorschau').src = "";


            eventID = "";

        })
};


function logout(){

    localStorage.clear();
    alert("Du wurdest erfolgreich abgemeldet!")
    window.location.href = "https://110018-2.web.fhgr.ch/";

}