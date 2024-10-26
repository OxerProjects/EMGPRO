// Media
const mainScreen  = document.querySelector('#mainScreen')
const alerts = document.querySelector('#alerts')
const switchButton = document.querySelector('#switchScreens')

const chanels = document.getElementById('chanels')
const chanel11 = document.getElementById('11')
const chanel12 = document.getElementById('12')
const chanel13 = document.getElementById('13')
const chanel14 = document.getElementById('14')
const close2 = document.getElementById('close2')
const pickChanels = document.getElementById('pickChanels')
const videoChanel = document.getElementById('videoChanel')

// Links
const news12 = `<iframe scrolling="no" class="news" width="100%" height="100%" src="https://www.mako.co.il/AjaxPage?jspName=embedHTML5video.jsp&galleryChannelId=3bf5c3a8e967f510VgnVCM2000002a0c10acRCRD&videoChannelId=8bf955222beab610VgnVCM100000700a10acRCRD&vcmid=1e2258089b67f510VgnVCM2000002a0c10acRCRD"frameborder="0" allowfullscreen id="mainScreen" autoplay>`;
const news11 = `<iframe class="news" width="100%" height="100%" src="https://www.kan.org.il/live/"frameborder="0" allowfullscreen id="mainScreen" autoplay>`;
const news13 = `<iframe class="news" width="100%" height="100%" src="https://13tv.co.il/live/"frameborder="0" allowfullscreen id="mainScreen" autoplay>`;
const news14 = `<iframe class="news" width="100%" height="100%" src="https://www.now14.co.il/live"frameborder="0" allowfullscreen id="mainScreen" autoplay>`;

pickChanels.addEventListener("click", () => {
    chanels.className = "chanels";
})

close2.addEventListener("click", () => {
    chanels.className = "chanels-hide";
})

chanel11.addEventListener("click", () => {
    videoChanel.innerHTML = news11
})

chanel12.addEventListener("click", () => {
    videoChanel.innerHTML = news12
})

chanel13.addEventListener("click", () => {
    videoChanel.innerHTML = news13
})

chanel14.addEventListener("click", () => {
    videoChanel.innerHTML = news14
})

//side:

const one = `https://www.tzevaadom.co.il/`;
const two = `https://hamal.co.il/main`;

const oneAlerts = document.getElementById('oneAlerts')
const twoAlerts = document.getElementById('twoAlerts')
const titleAlert = document.getElementById('titleAlerts')
const t3Alerts = document.getElementById('t3Alerts')


oneAlerts.addEventListener("click", () => {
    alerts.src = one;
    titleAlert.innerHTML = "התראות צופר"
})

twoAlerts.addEventListener("click", () => {
    alerts.src = two;
    titleAlert.innerHTML = "מערכת חמל"
})

t3Alerts.addEventListener("click", () => {
    alerts.src = "";
    titleAlert.innerHTML = "התראות באזורך"
})