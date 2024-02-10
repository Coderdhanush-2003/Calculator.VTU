const add = document.querySelector("#add");
const courseCode = document.querySelector("#course-code");
const credits = document.querySelector("#unit-load");
const grade = document.querySelector("#grade");
const tbody = document.querySelector("#tbody");
const tfoot = document.querySelector("#tfoot");
const table = document.querySelector("#table");
const calcGp = document.querySelector("#calc-gp");
const clear = document.querySelector("#clear");

let gpArry = [];

add.addEventListener("click", () => {
  if (
    courseCode.value === "" ||
    credits.value <= 0 ||
    grade.value <= 0
  ) {
    alert("Wrong input,check and try again");
  } else {
    const tr = document.createElement("tr");
    const tdCourseCode = document.createElement("td");
    tdCourseCode.innerHTML = courseCode.options[courseCode.selectedIndex].text;
    const tdcredits = document.createElement("td");
    tdcredits.innerHTML = credits.value;
    const tdGrade = document.createElement("td");
    tdGrade.innerHTML = grade.value;

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
    tr.appendChild(tdcredits);
    tr.appendChild(tdGrade);
    tr.appendChild(tdRemoveButton);
    tbody.appendChild(tr);
    table.classList.remove("display-none");
    calcGp.classList.remove("display-none");
    clear.classList.remove("display-none");
    gpArry.push({
      courseCode: courseCode.value,  
      credits: credits.value,
      grade: grade.value,

    });
    console.log(gpArry);
    courseCode.value = "";
    credits.value = "";
    grade.value = "0";
  }
});


calcGp.addEventListener("click", () => {
    let creditss = 0,
      productOfcreditssAndGrades = 0,
      sumOfProductOfcreditssAndGrades = 0;
  
    gpArry.forEach((result) => {
      creditss += parseInt(result.credits);
      productOfcreditssAndGrades +=  parseFloat(result.grade);
      sumOfProductOfcreditssAndGrades += parseInt(result.courseCode);
    });
    const tr = document.createElement("tr");
  
    tdTotalcredits = document.createElement("td");
    tdTotalcredits.innerHTML = `Your Total Completed Credits is ${creditss}`;
    
    tdGpa = document.createElement("td");
    tdGpa.setAttribute("colspan", "2");
    tdGpa.innerHTML = `Your CGPA is  ${(
        productOfcreditssAndGrades / sumOfProductOfcreditssAndGrades
    ).toFixed(2)} `;
  
    tr.appendChild(tdTotalcredits);
    tr.appendChild(tdGpa);
      if (tfoot.querySelector("tr") !== null) {
          tfoot.querySelector("tr").remove();
      }
    tfoot.appendChild(tr);
  });
  
  clear.addEventListener("click", () => {
    gpArry = [];
    tbody.querySelectorAll("*").forEach((child) => child.remove());
    if (tfoot.querySelector("tr") !== null) {
      tfoot.querySelector("tr").remove();
    }
  
    table.classList.add("display-none");
    calcGp.classList.add("display-none");
    clear.classList.add("display-none");
  });
  

  