var grade = document.getElementsByClassName('grade1');
var gradeholder = [];
for (let i = 0; i < grade.length; i++) {
    gradeholder[i] = grade[i];
}

// percentage column code
function percent() {
    var input;
    // makes the percent output during calculation blank
    if(event.srcElement.value == ""){
        return;
      }
    // all code below is to calculate and show percentage when values are inserted
    var percents = document.getElementsByClassName('percent');
    for (let i = 0; i < gradeholder.length; i++) {
        if (gradeholder[i] == event.srcElement) {
            input = i;
        }
    }
    if (input % 2 == 0) {
        var show = gradeholder[input].value / gradeholder[input + 1].value * 100;
        if (show != NaN && show != Infinity) {
            percents[input / 2].innerHTML = show + '%';
        }
    }
    else if (input % 2 == 1) {
        var show = gradeholder[input - 1].value / gradeholder[input].value * 100;
        if (show != NaN && show != Infinity) {
            percents[(input - 1) / 2].innerHTML = show + '%';
        }
    }
}

// mean button code
function mean() {
    weightget = document.getElementsByClassName('weight');
    gradeholder = document.getElementsByClassName('grade1');
    var gradesNum = [];

    // when button is pressed while form has empty values, window alert pops up
    for (let i = 0; i < gradeholder.length; i++) {
        if (gradeholder[i].value == "") {
            window.alert("Incomplete");
            return;
        }
    }

    for (let i = 0; i < gradeholder.length; i++) {
        gradesNum[i] = gradeholder[i].value;
    }


    percent = document.getElementsByClassName('percent');
    var proholder = [];
    var j = 0;
    for (let i = 0; i < gradesNum.length; i = i + 2) {
        var temp = gradesNum[i] / gradesNum[i + 1] * 100;
        proholder[j] = temp;
        percent[j].innerHTML = temp.toString() + '%';
        j++;
    }
    var sum = proholder.reduce(add, 0);
    function add(accumulator, a) {
        return accumulator + a;
    }
    sum = sum / (proholder.length);

    var result = document.getElementById("result");
    result.innerHTML = sum.toString();


}
// button activation
var meanBtn = document.getElementById("mean");
meanBtn.onclick = mean;


// code for weighted button
function weighted() {
    weights = document.getElementsByClassName('weight');
    var weightNums = [];
    gradeholder = document.getElementsByClassName('grade1');
    var gradesNum = [];
    // same window alert as above
    for (let i = 0; i < weights.length; i++) {
        if (weights[i].value == "") {
            window.alert("Incomplete");
            return;
        }
    }
    for (let i = 0; i < weights.length; i++) {
        weightNums[i] = weights[i].value;
    }

    for (let i = 0; i < gradeholder.length; i++) {
        if (gradeholder[i].value == "") {
            window.alert("Incomplete");
            return;
        }
    }

    for (let i = 0; i < gradeholder.length; i++) {
        gradesNum[i] = gradeholder[i].value;
    }


    percent = document.getElementsByClassName('percent');
    var proholder = [];
    var j = 0
    for (let i = 0; i < gradesNum.length; i = i + 2) {
        var temp = gradesNum[i] / gradesNum[i + 1] * 100;
        proholder[j] = temp;
        percent[j].innerHTML = temp.toString() + '%';
        j++;
    }
    var sum = 0;
    for (let i = 0; i < proholder.length; i++) {
        sum = sum + weightNums[i] * proholder[i];
    }

    var buttom = proholder.length;

    for (let i = 0; i < weightNums.length; i++) {
        if (weightNums[i] != 1) {
            buttom = buttom + parseInt(weightNums[i]);
        }

    }

    sum = sum / 100;


    var result = document.getElementById("result");
    result.innerHTML = sum.toString();
}

// weighted button activation code
var wtdBtn = document.getElementById("weighted");
wtdBtn.onclick = weighted;

// Add activity code

var i = 4;
function addField() {
    i++;
    // to specify my table which has the id calctable
    var table = document.getElementById("calctable");
    // position of inserted row, -1 so that it gets inserted at the bottom
    var row = table.insertRow(-1);

    // code below is just to create the rows with the same classes and etc. as my current ones
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Activity " + i;
    cell2.innerHTML = "A" + i;

    var cell3 = document.createElement("td");
    row.appendChild(cell3);
    var weight = document.createElement("input");
    weight.type = "number";
    weight.setAttribute("class", "weight");
    cell3.appendChild(weight);

    var cell4 = document.createElement("td");
    row.appendChild(cell4);
    var grade1 = document.createElement("input");
    grade1.type = "number";
    grade1.setAttribute("class", "grade1");
    var grade2 = document.createElement("input");
    grade2.setAttribute("class", "grade1");
    grade2.type = "number";
    cell4.appendChild(grade1);
    cell4.append(" / ");
    cell4.appendChild(grade2);

    var cell5 = document.createElement("td");
    row.appendChild(cell5);
    var output = document.createElement("output");
    output.setAttribute("class", "percent");
    cell5.appendChild(output);
    gradeholder.push(grade1);
    gradeholder.push(grade2);
    grade1.addEventListener("keyup", percent);
    grade2.addEventListener("keyup", percent);
    grade1.addEventListener("click", percent);
    grade2.addEventListener("click", percent);
}
for (let i = 0; i < gradeholder.length; i++) {
    gradeholder[i].addEventListener("keyup", percent);
    gradeholder[i].addEventListener("click", percent);
}
// activation code for add activity button
var addBtn = document.getElementById("add");
addBtn.addEventListener("click", addField);