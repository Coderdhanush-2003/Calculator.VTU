const add = document.querySelector("#add");
const courseCode = document.querySelector("#course-code");
const internal = document.querySelector("#unit-load");
const External1 = document.querySelector("#Attended");
const tbody = document.querySelector("#tbody");
const tfoot = document.querySelector("#tfoot");
const table = document.querySelector("#table");
const clear = document.querySelector("#clear");

let gpArry = [];

add.addEventListener("click", () => {
  if (courseCode.value.trim() === "") {
    alert("Course code should not be empty.\n");
  } else if (internal.value <= 0 || parseInt(internal.value) > 40) {
    alert("Internal marks should be greater than 0 and less than or equal to 40.\n");
  } else if (External1.value <= 0 || parseInt(External1.value) > 60) {
    alert("External marks should be greater than 0 and less than or equal to 60.\n");
  } else {
    const tr = document.createElement("tr");
    const tdCourseCode = document.createElement("td");
    tdCourseCode.innerHTML = courseCode.value;
    const tdinternal = document.createElement("td");
    tdinternal.innerHTML = internal.value;
    const tdExternal1 = document.createElement("td");
    tdExternal1.innerHTML = External1.value;
    const result = parseInt(internal.value) + parseInt(External1.value);

    // Use 'result' instead of 'results' and directly assign the grade
    const grade = calculateGrade(result);

    const tdResult = document.createElement("td");
    tdResult.innerHTML = grade;
    
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
    tr.appendChild(tdinternal);
    tr.appendChild(tdExternal1);
    tr.appendChild(tdResult);
    tr.appendChild(tdRemoveButton);
    
    tbody.appendChild(tr);
    table.classList.remove("display-none");
    clear.classList.remove("display-none");
    
    // Reset input boxes to default placeholders
    courseCode.value = "";
    internal.value = "";
    External1.value = "";
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

function calculateGrade(results) {
  var grade;

  if (results >= 90) {
      grade = 'S';
  } else if (results >= 80) {
      grade = 'A';
  } else if (results >= 70) {
      grade = 'B';
  } else if (results >= 60) {
      grade = 'C';
  } else if (results >= 50) {
      grade = 'D';
  } else {
      grade = 'FAIL';
  }

  return grade;
}
