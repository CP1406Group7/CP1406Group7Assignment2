// JavaScript Document
function nameEntered(name) {
 	if (name.value != "") {
        document.Feedback.nameTick.src = "Images/tick.png";
        document.Feedback.nameTick.alt = "tick";
    }
    else {
        document.Feedback.nameTick.src = "Images/cross.png";
        document.Feedback.nameTick.alt = "cross";
    }
}
function emailEntered(email) {
 	if (email.value != "") {
        document.Feedback.emailTick.src = "Images/tick.png";
        document.Feedback.emailTick.alt = "tick";
    }
    else {
        document.Feedback.emailTick.src = "Images/cross.png";
        document.Feedback.emailTick.alt = "cross";
    }
}