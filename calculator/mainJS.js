let newgrade;
let total = 0;
let aGrades = [];

function insert() {
    newgrade = document.getElementById("insertgrade").value;
    if (isNaN(newgrade)) {
        document.getElementById("errorwindow").innerHTML = "Not a Number";
    }
    else if ((newgrade < 0) || (newgrade > 4) || (newgrade == "")) {
        document.getElementById("errorwindow").innerHTML = "Number Error";
    } else {
        document.getElementById("errorwindow").innerHTML = "";
        total = total + parseFloat(newgrade);
        console.log(total);
        aGrades.push(newgrade);
        display();
        avarage();
    }
}

function sortNumber(a ,b) {
    return a - b;
}
function avarage() {
    aGrades.sort(sortNumber);
    parseFloat(aGrades);

    var highgrade = Math.max.apply(null, aGrades);
    var gradeslenth = aGrades.length;
    var avg = total / gradeslenth;
    var totalavg = avg.toFixed(2);

    document.getElementById("gradesnum").innerHTML = aGrades.length;
    document.getElementById("highgrade").innerHTML = highgrade;
    document.getElementById("lowgrade").innerHTML = aGrades[0];
    document.getElementById("avarage").innerHTML = totalavg;
}
function display() {
    var output = "";
    var i;
    for(i = 0; i < aGrades[i]; i++){
        output = output + aGrades[i] + "<br>";
        document.getElementById("gradeslist").innerHTML = output;
    }
}
function reset() {
    aGrades = [];
    location.reload();
}