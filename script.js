// script.js

function showAlert() {
    alert("Button clicked!");
}

function includeHTML() {
    const headerContainer = document.getElementById("header");
    const footerContainer = document.getElementById("footer");
    const navigationContainer = document.getElementById("navigation");
  
    fetch("header.html")
      .then(response => response.text())
      .then(html => {
        headerContainer.innerHTML = html;
      });
  
    fetch("footer.html")
      .then(response => response.text())
      .then(html => {
        footerContainer.innerHTML = html;
      });
  
    fetch("navigation.html")
      .then(response => response.text())
      .then(html => {
        navigationContainer.innerHTML = html;
      });
  }
  