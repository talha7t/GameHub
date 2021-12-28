// Get the modals
let eventModal = document.getElementById("event-modal");
let membershipModal = document.getElementById("membership-modal");

// Get the <span> element that closes the modal
let eventClose = document.getElementsByClassName("close")[0];
let membershipClose = document.getElementsByClassName("close")[1];

// When the user clicks on <span> (x), close the modal
eventClose.onclick = function () {
  eventModal.style.display = "none";
};

membershipClose.onclick = function () {
  membershipModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it

window.addEventListener("click", (event) => {
  if (event.target == eventModal) {
    eventModal.style.display = "none";
  }
  if (event.target == membershipModal) {
    membershipModal.style.display = "none";
  }
});

// when the element cliked contains event link class display the modal

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("event-link")) {
    eventModal.style.display = "block";
  }
  if (e.target.classList.contains("membership-link")) {
    console.log(e.target);
    membershipModal.style.display = "block";
  }
});
