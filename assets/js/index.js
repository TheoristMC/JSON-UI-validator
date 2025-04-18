import { ErrorTypes } from "./errorTypes.js";

const validateButton = document.getElementById("validate-button");
const uiInput = document.getElementById("ui-input");
const uiOutput = document.getElementById("ui-output");

const addOutput = (outputText, isError = true) => {
  const output = document.createElement("p");
  output.textContent = outputText;
  output.style.color = isError ? "#FF5555" : "#55FF55";
  uiOutput.appendChild(output);
};

class UIValidation {
  constructor(inputVal) {
    this.inputVal = inputVal;
  }

  checkJSON() {
    if (this.inputVal.trim() === "") {
      addOutput(ErrorTypes.invalidEmptyJSON);
      return false;
    }

    try {
      this.uiJSON = JSON.parse(this.inputVal);
      return true;
    } catch (err) {
      addOutput(err.message || String(err));
      return false;
    }
  }

  validate() {
    return new Promise((resolve, reject) => {
      const conditions = !this.checkJSON();

      if (conditions) resolve();
      else reject();
    });
  }
}

validateButton.addEventListener("click", () => {
  uiOutput.innerHTML = "";

  new UIValidation(uiInput.value)
    .validate()
    .catch(() => addOutput(ErrorTypes.noErrorFound, false));
});
