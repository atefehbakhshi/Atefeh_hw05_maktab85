'use strict'
// getting information from user
const userNotif = () => {
    let userNotif = {
        top: "",
        right: "",
        html: "",
        className: "",
    }
    for (let i = 0; i < 4; i++) {
        userNotif[Object.keys(userNotif)[i]] = prompt(`Please enter ${Object.keys(userNotif)[i]}`);
    }
    return userNotif
}
// set specefic information that get from user
const showNotification = () => {
    let notif = userNotif();
    let notification = document.querySelector("#notification")
    notification.style.cssText = `
    position:absolute;
    top: ${notif.top}px;
    right: ${notif.right}px;
    background-color : rgb(175 175 193);
    padding:50px;
    margin:0;
    `
    notification.innerHTML = `${notif.html}`
    notification.className = `${notif.className}`
}
showNotification();

// adding excessiv style to body
document.body.style.cssText = `
margin:0;
padding:0;
height: 100vh;
font-family: Arial;
font-size:30px;
background-color : rgb(83 83 95);
`