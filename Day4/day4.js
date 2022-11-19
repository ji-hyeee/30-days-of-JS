let password = document.getElementById("password");

function getPassword() {
    let chars =
        "0123456789abcedfghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 12;
    let password = "";

    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars[randomNumber]
    }
    document.getElementById("password").value = password
}

function copyPassword() {
    let copyText = document.getElementById("password").value;

    // copy
    navigator.clipboard.writeText(copyText);
}

// function copyPassword() {
//     let copyText = document.getElementById("password");
//     copyText.select()
//     copyText.setSelectionRange(0, 999)
//     document.execCommand('copy')
// }