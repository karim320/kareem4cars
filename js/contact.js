function Validateform() {

    var contact_name = document.forms['form']['contact_name'].value;
    if (contact_name == "" || contact_name == null) {
        alert(" pls fill the Name field");
        return false;
    }

    var contact_email = document.forms['form']['contact_email'].value;
    if (contact_email == "" || contact_email == null) {
        alert(" pls fill the Email field");
        return false;
    }
    var message = document.forms['form']['contact_message'].value;
    if (message == "" || message == null) {
        alert(" pls fill the message field");
        return false;
    }

}