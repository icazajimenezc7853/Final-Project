// script.js

function showAlert() {
    alert("Button clicked!");
}

function includeHTML() {
    const headerContainer = document.getElementById("header");
    const footerContainer = document.getElementById("footer");
    const navigationContainer = document.getElementById("navigation");
  
    fetch("template/header.html")
      .then(response => response.text())
      .then(html => {
        headerContainer.innerHTML = html;
      });
  
    fetch("template/footer.html")
      .then(response => response.text())
      .then(html => {
        footerContainer.innerHTML = html;
      });
  
    fetch("template/navigation.html")
      .then(response => response.text())
      .then(html => {
        navigationContainer.innerHTML = html;
      });
  }
  