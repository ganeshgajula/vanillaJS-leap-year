let inputName = document.querySelector(".inputName");
let nameSubmitBtn = document.querySelector(".nameSubmit");
let inputDob = document.querySelector(".inputDob");
let dobSubmitBtn = document.querySelector(".dobSubmit");
let welcomeText = document.querySelector(".welcomeTxt");
let result = document.querySelector(".result");
let sectionTwo = document.querySelector(".sectionTwo");
let sectionOne = document.querySelector(".sectionOne");

function inputChangeHandler() {
  if (inputName.value) {
    sectionOne.style.display = "none";
    sectionTwo.style.display = "block";
    welcomeText.innerText = "Welcome " + inputName.value;
  } else {
    alert("Please enter your name");
  }
}

function calculateLeapYear() {
  if (inputDob.value) {
    let birthDay = inputDob.value;

    var split = birthDay.split("/");

    var year = split[0];
    var month = split[1];
    var day = split[2];

    if (
      isNaN(parseInt(year)) ||
      isNaN(parseInt(month)) ||
      isNaN(parseInt(day)) ||
      year < 1900 ||
      year > 3000 ||
      month < 0 ||
      month > 12 ||
      day < 0 ||
      day > 31
    ) {
      alert("Please enter a valid date");
    }
    // else if(  ){
    //   console.log("Please enter a valid date");
    // }
    else {
      if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        result.innerText =
          "Congratulations!! You were born in a leap year. Thank you for playing!!";
      } else {
        result.innerText =
          "Seems like you were not born in a leap year. Thank you for playing!!";
      }
    }
  } else {
    alert("Please enter your DOB");
  }
}

nameSubmitBtn.addEventListener("click", inputChangeHandler);

dobSubmitBtn.addEventListener("click", calculateLeapYear);
