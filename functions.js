// function tabSwitch() {
//   var x = document.getElementById("formcontainer");
//   var y = document.getElementById("textaki");

//   if (x.style.display === "none" && y.style.display === "block") {
//     x.style.display = "block";
//     y.style.display = "none";
//   } else {
//     x.style.display = "none";
//     y.style.display = "block";
//   }
// }

function tabSwitch() {
  var formContainer = document.getElementById("formcontainer");
  var textArea = document.getElementById("textaki");

  // Set initial opacity for both elements (invisible)
  formContainer.style.opacity = 0;
  textArea.style.opacity = 0;

  // Toggle visibility and initiate animation based on current state
  if (
    formContainer.style.display === "none" &&
    textArea.style.display === "block"
  ) {
    formContainer.style.display = "block";
    textArea.style.display = "none";
    animateOpacity(formContainer, 1); // Fade in form container
  } else {
    formContainer.style.display = "none";
    textArea.style.display = "block";
    animateOpacity(textArea, 1); // Fade in text area
  }
}

function animateOpacity(element, targetOpacity) {
  var opacity = 0;
  var intervalId = setInterval(function () {
    if (opacity < 0 || opacity > 1) {
      clearInterval(intervalId); // Stop animation at extremes
    } else {
      element.style.opacity = opacity;
      opacity += opacity < targetOpacity ? 0.1 : -0.1; // Adjust opacity based on target
    }
  }, 10); // Adjust interval for animation speed (lower value = faster)
}
