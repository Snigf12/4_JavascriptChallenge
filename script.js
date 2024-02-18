/* Define Global Variables */
var alertMessage = "Hi, please make sure to:\n";
var missingFields=[];
var fieldMap = {
    'fname':"fill the First Name field",
    'lname':"fill the Last Name field",
    'course':"select a course in the drop-down list",
    'grade':"input a valid Grade form 0 to 100"
}

var fname = document.getElementById("fname").value;
var lname = document.getElementById("lname").value;
var course = document.getElementById("course").value;
var grade = document.getElementById("grade").value; //this should be 0 to 100

function formFieldsfull() {
    var missingField=[]
    /* I check if any field is empty, and if it is I save it in
     the missingField array*/
    if (fname === "") {
        missingField.push("fname");
    }
    if (lname === "") {
        missingFields.push("lname");
    }
    if (course === "") {
        missingFields.push("course");
    }
    if (grade === "" || parseInt(grade) < 0 || parseInt(grade) > 100) {
        missingFields.push("grade");
    }
    //If the array is empty, then everything is ok, so I return validation = ture
    if (missingFields.length === 0) {
        return true
    } else {
        return false
    }
}

function convertGrade() {
    /* Convert INT grade to Letter using the following convention
    F (0 - 49)        D (50 - 54)        C- (55 - 59)
    C (60 - 64)       C+ (65 - 69)       B- (70 - 74)
    B (75 - 79)       B+ (80 - 84)       A- (85 - 89)
    A (90 - 94)       A+ (95 - 100) */
    var numGrade = parseInt(grade) // To call only once parseInt
    if (numGrade < 50) {
        return "F"
    }
    if (numGrade > 49 && numGrade < 55) {
        return "D"
    }
    if (numGrade > 54 && numGrade < 60) {
        return "C-"
    }
    if (numGrade > 59 && numGrade < 65) {
        return "C"
    }
    if (numGrade > 64 && numGrade < 70) {
        return "C+"
    }
    if (numGrade > 69 && numGrade < 75) {
        return "B-"
    }
    if (numGrade > 74 && numGrade < 80) {
        return "B"
    }
    if (numGrade > 79 && numGrade < 85) {
        return "B+"
    }
    if (numGrade > 84 && numGrade < 90) {
        return "A-"
    }
    if (numGrade > 89 && numGrade < 95) {
        return "A"
    }
    if (numGrade > 94 && numGrade < 101) {
        return "A+"
    }
}

function writeInTable() {
    if (formFieldsfull) {
        var lgrade = convertGrade()
        
        var tableRow = document.querySelector('.table tr:nth-child(2)'); // Assuming the row to update is the second row
    
        // Update the text content of each <td> element with the new values
        tableRow.children[0].textContent = fname;
        tableRow.children[1].textContent = lname;
        tableRow.children[2].textContent = course;
        tableRow.children[3].textContent = grade;
        tableRow.children[4].textContent = lgrade;

    } else {
        for (var key in missingFields) {
            alertMessage += "*" + fieldMap[key] + "\n"
        }
        alert(alertMessage)
    }
}