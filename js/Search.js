document.addEventListener("DOMContentLoaded", function () {
    let availableKeywords = [
      "Biology for Engineers",
      "Engineering Chemistry",
      "Environmental Studies",
      "Engineering Chemistry Laboratory",
      "Problem Solving using C",
      "Computational Thinking for Problem Solving",
      "Problem Solving using C Laboratory",
      "Computational Thinking Laboratory",
      "IT Workshop",
      "Basic Electrical, Electronics & Measurement Engineering",
      "Introduction to Engineering",
      "Engineering Products Laboratory",
      "Professional Communication - I",
      "Professional Communication - II",
      "Linear Algebra for Computing",
      "Calculus & Ordinary Differential Equations",
      "Probability, Statistics and Queuing Theory",
      "Design Thinking",
      "Universal Human Values",
      "Innovation and Entrepreneurship",
      "Project Management and Finance",
      "Engineering Graphics",
      "Semiconductor Physics",
      "Modern Physics Laboratory",
      "Discrete Mathematics",
      "Data Structures",
      "Operating Systems",
      "Computer Networks",
      "Formal Languages and Automata Theory",
      "Image Processing",
      "Modern Computer Architecture",
      "Digital Electronics",
      "Design and Analysis of Algorithms",
      "Object Oriented Programming using Java",
      "Database Management Systems",
      "Web and Mobile Application Development",
      "Python Programming",
      "Data Structures Laboratory",
      "Computer Networks Laboratory",
      "Operating Systems Laboratory",
      "Competitive Coding - I",
      "Competitive Coding - II",
      "Startup Essentials",
      "Nanotechnology in Agriculture",
      "Intellectual Property Rights for Engineers",
      "Organizational Behaviour",
      "Use Case Approach for Vulnerability Analysis & Penetration Testing",
      "Professional Proficiency Course - I",
      "Professional Proficiency Course - II",
      "Professional Proficiency Course - III",
      "Engineers and Society",
      "Constitution of India",
      "Compiler Design",
      "Data Warehousing and Data Mining",
      "Microprocessor and Microcontroller",
      "Software Engineering",
      "Machine Learning",
      "Microprocessor and Microcontroller Laboratory",
      "Machine Learning Laboratory",
      "Privacy and Security in Online Social Media",
      "Minor Project-II",
      "Minor Project-I",
      "CSP-community Service Project",
      "NPTEL-1",
      "NPTEL-2",
      "Open Elective-1",
      "Open Elective-2",
      "Open Elective-3",
      "Open Elective-4",
      "Open Elective-5",
      "Open Elective-6",
      "Professional Proficiency Course - IV",
      "Program Elective -1",
      "Program Elective -2",
      "Program Elective -3",
      "Program Elective -4",
      "Program Elective -5",
      "Program Elective -6",
      "Program Elective -7",
      "Program Elective -8",
      "Program Elective -9",
      "IHL-1",
      "IHL-2",
      "IHL-3"
    ];
  
    const resultsBox = document.querySelector("#course-code + .result-box"); // Use the adjacent sibling selector
    const inputBox = document.querySelector("#course-code");
  
    if (inputBox) {
      inputBox.addEventListener("input", function () {
        let result = [];
        let input = inputBox.value;
        if (input.length) {
          result = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
          });
        }
        display(result);
  
        if (!result.length) {
          resultsBox.innerHTML = '';
        }
      });
    }
  });
  
  function display(result) {
    const content = result.map((list) => {
      return "<div class='result-item' onclick='selectInput(this)'>" + list + "</div>";
    });
  
    document.querySelector("#course-code + .result-box").innerHTML = content.join('');
  }
  
  function selectInput(item) {
    document.querySelector("#course-code").value = item.innerHTML;
    document.querySelector("#course-code + .result-box").innerHTML = '';
  }
  