const add = document.querySelector("#add");
const courseCode = document.querySelector("#course-code");
const unitLoad = document.querySelector("#unit-load");
const grade = document.querySelector("#Attended");
const tbody = document.querySelector("#tbody");
const tfoot = document.querySelector("#tfoot");
const table = document.querySelector("#table");
const clear = document.querySelector("#clear");

let gpArry = [];
add.addEventListener("click", () => {
  if (
    courseCode.value === "" ||
    unitLoad.value <= 0 ||
    grade.value === 0
  ) {
    alert("Wrong input, check and try again");
  } else {
    const tr = document.createElement("tr");
    const tdCourseCode = document.createElement("td");
    tdCourseCode.innerHTML = courseCode.value;
    const tdUnitLoad = document.createElement("td");
    tdUnitLoad.innerHTML = unitLoad.value;
    const tdGrade = document.createElement("td");
    tdGrade.innerHTML = grade.value;
    const result = (grade.value / unitLoad.value) * 100;
    const tdResult = document.createElement("td");
    tdResult.innerHTML = ` ${parseInt(result)}`;
    
    // Append the elements in the correct order
    const eligibilityClass = getEligibilityClass(result);
    const tdeligiblity = document.createElement("td");
    tdeligiblity.innerHTML = eligibilityClass;

    // Correct the function name to calculateMarks
    const calculatedMarks = calculateMarks(result);
    const tdCalculatedMarks = document.createElement("td");
    tdCalculatedMarks.innerHTML = calculatedMarks;
    
    const tdRemoveButton = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.classList.add("btn", "btn-outline-danger");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      tbody.removeChild(tr);
      // You may want to update your gpArry array or perform any other actions here
    });
    tdRemoveButton.appendChild(removeButton);
    
    tr.appendChild(tdCourseCode);
    tr.appendChild(tdUnitLoad);
    tr.appendChild(tdGrade);
    tr.appendChild(tdResult);
    tr.appendChild(tdeligiblity);
    tr.appendChild(tdCalculatedMarks); // Corrected the variable name
    tr.appendChild(tdRemoveButton);
    
    tbody.appendChild(tr);
    table.classList.remove("display-none");
    clear.classList.remove("display-none");
    
    // Reset input boxes to default placeholders
    courseCode.value = "";
    unitLoad.value = "";
    grade.value = "";
  }
});

clear.addEventListener("click", () => {
  gpArry = [];
  tbody.querySelectorAll("*").forEach((child) => child.remove());
  if (tfoot.querySelector("tr") !== null) {
    tfoot.querySelector("tr").remove();
  }

  table.classList.add("display-none");
  clear.classList.add("display-none");
});



function getEligibilityClass(result) {
  if (result >= 75) {
    return "Eligible"; // Eligible
  } else if (result >= 65) {
    return "Condonation"; // Condonation
  } else {
    return "Not Eligible"; // Not Eligible
  }
}


// Function to calculate marks based on the result
function calculateMarks(result) {
  if (result >= 90) {
    return 5;
  } else if (result >= 80) {
    return 4;
  } else if (result >= 75) {
    return 3;
  } else {
    return 0;
  }
}