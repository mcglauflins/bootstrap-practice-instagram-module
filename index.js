function gridOrDetail() {
    let isGrid = document.getElementById("btnradio1");
    let cardBodies = document.querySelectorAll("#card-container .card-body");
    let cards = document.querySelectorAll(".card");
    let container = document.querySelector("#card-container");
  
    if (isGrid.checked) {
      container.classList.replace("flex-column", "flex-row");
      container.classList.replace("flex-nowrap", "flex-wrap");
      container.classList.remove('align-items-center');
      for (cardBody of cardBodies) {
        cardBody.style.display = "none";
      }
      for (card of cards) {
        card.style.width = "18rem";
      }
    } else {
      container.classList.replace("flex-row", "flex-column");
      container.classList.replace("flex-wrap", "flex-nowrap");
      container.classList.add('align-items-center');
      for (cardBody of cardBodies) {
        cardBody.style.display = "block";
      }
      for (card of cards) {
        card.style.width = "36rem";
      }
    }
  }
  
  // this should be on a window.onload
  document.getElementById("btnradio1").addEventListener("click", gridOrDetail);
  document.getElementById("btnradio2").addEventListener("click", gridOrDetail);
  gridOrDetail();
  