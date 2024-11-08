// Alert
var r = document.querySelector(':root');
var backgroundColor;

const areaOfAlert = document.getElementById("areaOfAlert");

const alertButton = document.querySelector('#alertButton');
const areaName = document.querySelector('#areaName');

function getBackground() {
    var rs = getComputedStyle(r);
    backgroundColor = rs.getPropertyValue('--background-color');
}

getBackground();

function alertBackground() {
    r.style.setProperty('--background-color', 'var(--alert-color)');
}

function areaAlert() {
    document.querySelector('#areaBox').className = "areaBox-hide";
}

function deAlertBackground() {
    r.style.setProperty('--background-color', `${backgroundColor}`);
}

// Button Activation
let i = 0;
alertButton.addEventListener("click", () => {
    if (i == 0) {
        alertBackground();
        i = 1;
    } else {
        deAlertBackground();
        i = 0;
    }
});

// Get Alerts
let ditectenRedAlert = 0
let count = 0
let area;

areaOfAlert.addEventListener("click", () => {
    area = areaName.value;
})


async function getAlerts() {
    try {
        const response = await fetch("https://www.mako.co.il/Collab/amudanan/alerts.json");
        const alertArray = await response.json();
        count++;
        
        if (alertArray.data.length > 0) {
            console.log("נמצאה אזעקה ב:");
            console.log(alertArray);
            console.log(alertArray.data);

            alertArray.data.forEach(element => {
                console.log(element);

                // Adding the new Alert entry
                let now = new Date();
                if(Alerts.find(({ title }) => title === element ) === null) {
                    Alerts.push({
                        'title': element,
                        'time': `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
                    });
                }

                if (element === "בית דגן" || element === area) {
                    if (ditectenRedAlert === 0) {
                        count = 0;
                        startCountdown();
                        alertBackground();
                        ditectenRedAlert = 1;
                        document.querySelector('#areaBox').className = "areaBox";
                    }
                    if (count === 15) {
                        areaAlert();
                    }
                    if (count === 600) {
                        count = 0;
                        deAlertBackground();
                        ditectenRedAlert = 0;
                    }
                }
            });
        }
        setTimeout(getAlerts, 1000);
    } catch (err) {
        console.error(err);
    }
}

getAlerts();
