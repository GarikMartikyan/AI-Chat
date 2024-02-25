const root = document.getElementById("root");

if (window.innerWidth < 770) {
  window.visualViewport.addEventListener("resize", () => {
    root.style.height = window.visualViewport.height + "px";
  });
}
