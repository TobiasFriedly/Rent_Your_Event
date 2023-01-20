getUser();

getEvent();

PruefeEvent();

function getUser() {

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

                alert('Du musst dich anmelden, um fortzufahren. Wir leiten dich auf die Startseite weiter.');
                window.location.href = "https://110018-2.web.fhgr.ch/";

            }

        })

}

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

function getEvent(){


    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    let formData = new FormData();
    formData.append('userID', userID);

    fetch("https://110018-2.web.fhgr.ch/php/getEvent.php",
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

            ShowEvent(data);


        })

}

function ShowEvent(data) {

    data.forEach(event => {


        
        let eventContainer = document.createElement("div");
        eventContainer.innerHTML =

            '<div class="event">' +
            '<h2 class="event-name">'  + event.name + '</h2>' +
            '<p class="event-ort">' + event.ort + '</p>' +
            '<img class="event-image" src="' + event.bild + '">' +
            '<p class="event-beschreibung">' + event.beschreibung + '</p>' +
            '<p class="event-preis">' + event.preis + ' CHF' + '<br>' +
            'Kontakt: <a class="kontakt" target="_blank" href="mailto:'+ event.email + '">' + event.email + '</a>' + '</p>' +
            '<p> <b> <span id="EVENT-' + event.ID + '">  </span> </b> </p>'
            + '</div>';

        document.getElementById("event-liste").appendChild(eventContainer);


    });

}

function logout(){

    localStorage.clear();
    alert("Du wurdest erfolgreich abgemeldet!")
    window.location.href = "https://110018-2.web.fhgr.ch/";

}