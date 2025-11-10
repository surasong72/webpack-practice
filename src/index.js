import './style.css';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

const content = document.getElementById('content');

function clear() {
  content.textContent = "";
}

document.getElementById('home-btn').addEventListener('click', () => {
  clear();
  loadHome();
});

document.getElementById('menu-btn').addEventListener('click', () => {
  clear();
  loadMenu();
});

document.getElementById('contact-btn').addEventListener('click', () => {
  clear();
  loadContact();
});

// load default page
loadHome();
