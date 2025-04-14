const addEditeform = document.getElementById("addEditeform");


const timhr = document.getElementById("timhr");

const timmnt = document.getElementById("timmnt");

const timestamp = document.getElementById("timestamp");




setInterval(() => {
    let d = new Date();
    let m = d.getMinutes();
    let h = d.getHours();

    if (h >= 4 && h < 12) {
        timestamp.innerText = "Good Morning..";
    } else if (h >= 12 && h < 18) {
        timestamp.innerText = "Good Afternoon..";
    } else if (h >= 18 && h < 24) {
        timestamp.innerText = "Good Evenign..";
    } else {
        timestamp.innerText = "Have a Good Day..";
    }

    switch (h) {
        case 13: h = 1;
            break;
        case 14: h = 2;
            break;
        case 15: h = 3;
            break;
        case 16: h = 4;
            break;
        case 17: h = 5;
            break;
        case 18: h = 6;
            break;
        case 19: h = 7;
            break;
        case 20: h = 8;
            break;
        case 21: h = 9;
            break;
        case 22: h = 10;
            break;
        case 23: h = 11;
            break;
        case 24: h = 13;
            break;
        default: h = h;
            break;
    }
    let hs = h.toString();
    let ms = m.toString();
    if (hs.length < 2) {
        hs = "0" + hs;
    }

    if (ms.length < 2) {
        ms = "0" + ms;
    }
    timhr.innerText = hs;
    timmnt.innerText = ms;

}, 1000);





document.getElementById("hideaddEditeform").addEventListener("click", () => {
    addEditeform.style.display = "none";
});


let polsdfdsfdaf = document.getElementById('mrappscont');
window.addEventListener('mouseup', function (event) {
    if (event.target != polsdfdsfdaf && event.target.parentNode != polsdfdsfdaf) {
        polsdfdsfdaf.style.display = 'none';
    }
});

document.getElementById("msappsBtn").addEventListener("click", () => {
    polsdfdsfdaf.style.display = 'flex';
});
document.getElementById("gitgoBtn").addEventListener("click", () => {
    window.open("https://github.com/", "_blank");
});
document.getElementById("fontawesomegoBtn").addEventListener("click", () => {
    window.open("https://fontawesome.com/icons", "_blank");
});
document.getElementById("tempmailgoBtn").addEventListener("click", () => {
    window.open("https://temp-mail.org/en/", "_blank");
});
document.getElementById("gpgGoBtn").addEventListener("click", () => {
    window.open("https://chatgpt.com/", "_blank");
});
document.getElementById("ytGoBtn").addEventListener("click", () => {
    window.open("https://www.youtube.com", "_blank");
});
document.getElementById("googleGoBtn").addEventListener("click", () => {
    window.open("https://www.google.com", "_blank");
});


// get date and day 
const dateDayfun = () => {
    let d = new Date();
    let dayn = d.getDay();
    let dd = d.getDate().toString();
    let dm = (d.getMonth() + 1).toString();
    let dy = d.getFullYear().toString();

    if (dd.length < 2) {
        dd = "0" + dd;
    }
    if (dm.length < 2) {
        dm = "0" + dm;
    }
    let daysn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let datefomt = {
        dn: daysn[dayn],
        dd: dd + "/" + dm + "/" + dy
    };
    return datefomt;
};
document.getElementById("dayMn").innerText = dateDayfun().dn;
document.getElementById("dateMn").innerText = dateDayfun().dd;




