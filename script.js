// script.js - small interactivity
document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');
navToggle?.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
      // close mobile nav
      if(nav.classList.contains('open')) nav.classList.remove('open');
    }
  });
});

// form fallback - copy to clipboard
const fallbackBtn = document.getElementById('form-fallback');
fallbackBtn?.addEventListener('click', ()=> {
  const form = document.getElementById('contact-form');
  const data = new FormData(form);
  let text = 'Contact message from website:\n\n';
  for(const [k,v] of data.entries()) text += `${k}: ${v}\n`;
  navigator.clipboard?.writeText(text).then(()=>{
    alert('Message copied to clipboard. You can paste it in your email.');
  }).catch(()=> alert('Copy failed — please copy manually.'));
});
