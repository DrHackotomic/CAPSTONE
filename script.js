var weekdayButton = document.getElementById("weekdayDropdown");
var weekendButton = document.getElementById("weekendDropdown");

function toggleDropdown(dropdown){
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

document.querySelector('.navbar a[href="#weekday"]').addEventListener('click', function(event){
  event.preventDefault();
  toggleDropdown(weekdayButton);
}, false);

document.querySelector('.navbar a[href="#weekend"]').addEventListener('click', function(event){
  event.preventDefault();
  toggleDropdown(weekendButton);
}, false);

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
      }
    }
  }
}
