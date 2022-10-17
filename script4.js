'use strict'
// getting information from user
const userNotif = () => {
    let userNotif = {
        top: "",
        right: "",
        message: "",
    }
    for (let i = 0; i < 3; i++) {
        userNotif[Object.keys(userNotif)[i]] = prompt(`Please enter ${Object.keys(userNotif)[i]}`);
    }
    let hasClass = confirm('Do you want add class to your message?');
    if (hasClass === true) userNotif.className = 'animation';
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
    `
    notification.innerHTML = `${notif.message}`
    if (notif.className !== undefined) notification.className = `${notif.className}`
}
showNotification();