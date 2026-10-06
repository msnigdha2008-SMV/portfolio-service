const portfolioApi = '/api/portfolio';
const contactPopup = document.getElementById('contactPopup');
document.getElementById('openContactPopup').addEventListener('click', () => contactPopup.showModal());
document.getElementById('closeContactPopup').addEventListener('click', () => contactPopup.close());
contactPopup.addEventListener('click', event => {
  if (event.target === contactPopup) contactPopup.close();
});

fetch(portfolioApi).then(r => r.json()).then(data => {
  document.title = data.name;
  document.getElementById('tagline').textContent = data.tagline;
  document.getElementById('about').textContent = data.about;
  document.getElementById('content').innerHTML = data.content.map(item => `<article class="card"><h3>${item.title}</h3><p>${item.description}</p></article>`).join('');
}).catch(() => document.getElementById('about').textContent = 'Please start the portfolio service to load the channel details.');
document.getElementById('contactForm').addEventListener('submit', async event => {
  event.preventDefault(); const status = document.getElementById('status'); status.textContent = 'Sending…';
  const body = {name: document.getElementById('name').value, email: document.getElementById('email').value, message: document.getElementById('message').value};
  try { const response = await fetch('http://localhost:8081/api/messages', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)}); if (!response.ok) throw Error(); status.textContent = 'Thanks! Your message was received.'; event.target.reset(); }
  catch { status.textContent = 'Could not reach the contact service. Start it on port 8081.'; }
});
