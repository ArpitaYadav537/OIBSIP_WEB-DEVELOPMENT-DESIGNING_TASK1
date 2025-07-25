  
    let inputDisplay = document.getElementById("inputDisplay");
    let resultDisplay = document.getElementById("resultDisplay");
    let input = "";
    function appendToInput(value) {
      input += value;
      inputDisplay.textContent = input;
      resultDisplay.textContent = ""; // clear previous result
    }
    function clearDisplay() {
      input = "";
      inputDisplay.textContent = "";
      resultDisplay.textContent = "";
    }
    function calculate() {
      try {
        let result = eval(input);
        resultDisplay.textContent = "= " + result;
        input = result.toString(); // for continued operations
      } catch {
        resultDisplay.textContent = "Error";
        input = "";
      }
    }
  