function alertIban(iban) {
    if(iban==null){
        alert(checkIban(document.getElementById("iban").value));
    }else{
        alert(checkIban(iban));
    }
}

function checkIban(input) {
    var code_length = {LT: 20};
    var iban = String(input).toUpperCase().replace(/[^A-Z0-9]/g, ''),
        code = iban.match(/^([A-Z]{2})(\d{2})([A-Z\d]+)$/);
    if (!code || iban.length !== code_length[code[1]]) {
        return fileDisplayArea = iban + ';' + false;
    } else {
        return iban + ';' + true;
    }
}
