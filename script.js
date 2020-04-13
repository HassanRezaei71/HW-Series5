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

