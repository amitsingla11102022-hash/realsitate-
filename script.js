const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle?.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const searchForm = document.querySelector("#propertySearch");
const searchResult = document.querySelector("#searchResult");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const type = document.querySelector("#type").value;
  const location = document.querySelector("#location").value;
  const budget = document.querySelector("#budget").value;
  const beds = document.querySelector("#beds").value;
  const filters = [type, location, budget, beds].filter(Boolean);
  searchResult.textContent = filters.length
    ? `Showing properties matching: ${filters.join(" • ")}`
    : "Showing all featured properties.";
  document.querySelector("#properties").scrollIntoView({behavior:"smooth"});
});

const modal = document.querySelector("#modal");
const modalTitle = document.querySelector("#modalTitle");
document.querySelectorAll(".details-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    modalTitle.textContent = btn.dataset.property;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  });
});
document.querySelector(".modal-close").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if(e.target === modal) closeModal(); });
function closeModal(){
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}
document.querySelector(".modal-contact").addEventListener("click", closeModal);

document.querySelector("#leadForm").addEventListener("submit", e => {
  e.preventDefault();
  const msg = document.querySelector("#formMessage");
  msg.textContent = "Thank you! Your enquiry has been received. Our consultant will contact you shortly.";
  e.target.reset();
});
