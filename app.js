document.addEventListener("DOMContentLoaded", function () {
  let hideIds = [
    "text-5884587692",
    "text-7673877223",
    "text-7045380297",
    "text-5688798481",
    "text-5737719540",
    "text-5758302583",
    "text-6313063991",
    "text-5942101718",
    "text-5943523720",
    "text-5945459722",
  ];

  let showIds = ["text-5884587692"];

  let hideElements = hideIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  let showElements = showIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  function hideElement(element) {
    element.style.display = "none";
  }

  function showElement(element) {
    element.style.display = "block";
  }

  function handleAllSelectsChange(hideIds, showCountCallback) {
    const selectElements = document.querySelectorAll("select");

    selectElements.forEach((selectElement) => {
      selectElement.addEventListener("change", function () {
        const selectedOption =
          selectElement.options[selectElement.selectedIndex].textContent;
        const showCount = showCountCallback(selectedOption);

        if (showCount !== null) {
          for (let i = 0; i < showCount; i++) {
            showElement(document.getElementById(hideIds[i]));
          }
        }
      });
    });
  }

  function getShowCount(selectedOption) {
    if (selectedOption.trim() === "1 Location") {
      hideElements.forEach(hideElement); // Hide all elements
      showElement(document.getElementById(hideIds[0])); // Show the first element
      return 0;
    } else if (selectedOption.trim() === "3 Locations") {
      //   hideElements.forEach(showElement); // Show all elements
      return 3; // Return the total number of elements
    } else if (selectedOption.trim() === "5 Locations") {
      //   hideElements.forEach(showElement); // Show all elements
      return 5; // Return the total number of elements
    }
    if (selectedOption.trim() === "10 Locations") {
      //   hideElements.forEach(showElement); // Show all elements
      return 9; // Return the total number of elements
    }

    return 0; // Return null if the selected option doesn't match any condition
  }

  hideElements.forEach(hideElement);
  showElements.forEach(showElement);

  let radioButtons = document.querySelectorAll('input[type="radio"]');

  radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener("click", function () {
      if (this.checked) {
        hideElements.forEach(hideElement);
        showElement(document.getElementById(hideIds[0]));
        handleAllSelectsChange(hideIds, getShowCount);
      }
    });
  });
});
