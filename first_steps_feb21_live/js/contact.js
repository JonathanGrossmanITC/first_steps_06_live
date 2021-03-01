const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const fileUpload = document.getElementById("fileUpload");
const checkbox = document.getElementById("checkbox");
const submitButton = document.getElementById("submitButton");

const onAnyInputChange = () => {
  console.log(firstName.id, firstName.value);
  console.log(lastName.id, lastName.value);
  console.log(fileUpload.id, fileUpload.value);
  console.log(checkbox.id, checkbox.checked);
  console.log(submitButton.id, submitButton.classList);

  // You can conditionally call things based on conditions
  //   if (firstName.value != "") {
  //     submitButton.disabled = false;
  //   }
};

firstName.addEventListener("input", onAnyInputChange);
lastName.addEventListener("input", onAnyInputChange);
fileUpload.addEventListener("input", onAnyInputChange);
checkbox.addEventListener("input", onAnyInputChange);

submitButton.addEventListener("click", onAnyInputChange);

// console.log(lastName);
