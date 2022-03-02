const sidebarBtn = document.querySelector('.sidebar-button');
const sidebar = document.querySelector('.sidebar');
const sidebarItem = document.querySelectorAll('.sidebar-item');

function toggleSidebar() {
  sidebar.classList.toggle('sidebar-active');
  sidebarBtn.classList.toggle('sidebar-button-active');
}

sidebarBtn.addEventListener('click', toggleSidebar);
sidebarItem.forEach(item => item.addEventListener('click', toggleSidebar));