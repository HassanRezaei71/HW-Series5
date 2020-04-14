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
    const Prefix = ["0910", "0919", "0990", "0930", "0933", "0935", "0936", "0937", "0938", "0939", "0901", "0902",
                    "0903", "0920", "0921", "0931", "0932"];
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


//  (3)
function checkUserName() {
    let username = document.getElementById("user-name").value;
    let result = true;
    for (let i = 0; i < username.length; i++) {
        if (!checkChar(username[i])) {
            result = false;
            break;
        }
    }
    if (result && (username.length >= 3 && username.length <= 9)) {
        document.getElementById("result-User-name").innerHTML = "Valid User Name";
        document.getElementById("result-User-name").style.color = "#2dca4f";
    } else {
        document.getElementById("result-User-name").innerHTML = "Not Valid User Name";
        document.getElementById("result-User-name").style.color = "#ff8d8d";
    }
}

function checkChar(value) {
    let result = false;
    const code = value.charCodeAt();
    if ((code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122) || code === 95 ||
        code === 46) {
        result = true;
    }
    return result;
}


//  (4)


//  (5)
function randomNumber() {
    let result = [];
    let num = document.getElementById("random-number").value;
    if (num === "") {
        result = "Please Enter A Number";
    } else {
        while (result.length < num) {
            let random = Math.floor(Math.random() * (59999 - 1000)) + 1000;
            if (result.indexOf(random) === -1) {
                result.push(random);
            }
        }
    }
    document.getElementById("result-random-number").style.color = "#2dca4f";
    document.getElementById("result-random-number").innerHTML = result;
}


//  (6)
function mergeObjects() {
    let objects = [{a: 1, b: 2}, {c: 3, d: 4}];
    let result = {};
    for (let value of objects) {
        result = {...result, ...value};
    }
    document.getElementById("result-merge-objecs").style.color = "#2dca4f";
    document.getElementById("result-merge-objecs").innerHTML = JSON.stringify(result);
}


//  (7)
function showMapRange(range1, range2, num) {
    let result = "Enter Valid Number";
    if (num < range1[0] || num > range1[1]) {
        document.getElementById("result-range-dynamically").style.color = "#ff8d8d";
        document.getElementById("result-range-dynamically").innerHTML = result;
    } else {
        result = (num - range1[0]) / (range1[1] - range1[0]) * (range2[1] - range2[0]) + range2[0];
        document.getElementById("result-range-dynamically").style.color = "#2dca4f";
        document.getElementById("result-range-dynamically").innerHTML = result;
    }
}

function mapRange() {
    showMapRange([1, 80], [30, 99.5], 3);
}


//  (8)
function showShuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    document.getElementById("result-shuffle-array").style.color =  "#2dca4f";
    document.getElementById("result-shuffle-array").innerHTML =array;
}

function shuffleArray() {
    showShuffleArray([25,32,45,98,76]);
}