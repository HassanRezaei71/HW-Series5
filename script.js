//  (1)
function checkEmail() {
    let value = document.getElementById("email").value;
    let result = true;
    if (value.indexOf('@') === -1) {
        result = false;
    } else {
        let parts = value.split('@');
        let domain = parts[1];
        if (domain.indexOf('.') === -1) {
            result = false;
        } else {
            let domainParts = domain.split('.');
            let ext = domainParts[1];
            if (ext.length > 4 || ext.length < 2) {
                result = false;
            }
        }
    }
    if (!result) {
        result = "Not Valid Email";
        document.getElementById("result-valid").innerHTML = result;
        document.getElementById("result-valid").style.color = "#ff8d8d";
    } else {
        result = "Valid Email";
        document.getElementById("result-valid").innerHTML = result;
        document.getElementById("result-valid").style.color = "#2dca4f";
    }
}


//  (2)
function checkPhone() {
    let value = document.getElementById("phone").value;
    let result = false;
    const Prefix = ["0910", "0919", "0990", "0930", "0933", "0935", "0936", "0937", "0938", "0939", "0901", "0902", "0903", "0920", "0921", "0931", "0932"];
    let temp = value.substr(0, 4);
    if (value.length === 11 && Prefix.includes(temp)) {
        result = true;
    }
    if (result) {
        document.getElementById("result-valid-phone").innerHTML = "Valid Phone Number";
        document.getElementById("result-valid-phone").style.color = "#2dca4f";
    } else {
        document.getElementById("result-valid-phone").innerHTML = "Not Valid Phone Number";
        document.getElementById("result-valid-phone").style.color = "#ff8d8d";
    }
}