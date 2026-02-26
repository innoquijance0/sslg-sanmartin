function openOfficer(role, name, imgSrc, desc) {
  document.getElementById('popup-role').textContent = role;
  document.getElementById('popup-name').textContent = name;
  document.getElementById('popup-img').src = imgSrc;
  document.getElementById('popup-desc').textContent = desc;

  document.getElementById('officerPopup').classList.add('active');
}

function closeOfficer() {
  document.getElementById('officerPopup').classList.remove('active');
}

// Smooth scroll for "View Projects" button
document.getElementById('view-projects-btn').addEventListener('click', () => {
  const projectsSection = document.getElementById('projects');
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  }
});