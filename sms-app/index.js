function checkMobileOS() {
 
    var MobileUserAgent = navigator.userAgent || navigator.vendor || window.opera;
 
    if (MobileUserAgent.match(/iPad/i) || MobileUserAgent.match(/iPhone/i) || MobileUserAgent.match(/iPod/i)) {
 
        return 'iOS';
 
    } else if (MobileUserAgent.match(/Android/i)) {
 
        return 'Android';
 
    } else {
 
return 'unknown';
 
    }
 
}
 
var message_text = 'Some message goes here';
 
var href = '';
 
if (checkMobileOS() == 'iOS') {
 
    href = "sms:+123456789&body=" + encodeURI(message_text);
 
}
 
if (checkMobileOS() == 'Android') {
 
    href = "sms:+123456789?body=" + encodeURI(message_text);
 
}
 
document.getElementById("sms_link").setAttribute('href', href);
