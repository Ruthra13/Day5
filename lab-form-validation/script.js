// Progression 1
// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails

function checkUserName() {
  const $user = document.getElementById("usertext").value;
  var regExp = /^[a-zA-Z0-9]*$/;

  if (
    user != "" &&
    user.length >= 8 &&
    user.length < 15 &&
    user.indexOf(" ") == -1 &&
    regExp.test(user)
  ) {
    console.log("true");
    return true;
  } else {
    return false;
    console.log("false");
  }
}

// Progression 2 (/^[a-zA-Z0-9._@]$/)
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise

function checkEmail() {
  var mail = document.getElementById("emailtext").value;
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (reg.test(mail) == false) {
    return false;
    console.log("false");
  } else {
    return true;
    console.log("true");
  }
}

// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false

// function checkPassword() {
//   var pass = document.getElementById("passwordtext").value;
//   var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
//   if (pass.match(paswd)) {
//     return true;
//   } else {
//     return false;
//   }
// }

function checkPassword() {
  var pass = document.getElementById("passwordtext").value;
  var strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])"
  );
  if (strongRegex.test(pass)) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}
