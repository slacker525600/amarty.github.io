function populateMenuLinks(links) {
  const topbar = document.querySelector('.top-links');
  if (!topbar) return;

  for (const link of links) {
    const anchor = document.createElement('a');
    anchor.href = link.href;
    anchor.textContent = link.text;

    topbar.appendChild(anchor);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  populateMenuLinks([
    { text: 'Home', href: 'index.html' },
    { text: 'About', href: 'about.html' },
    { text: 'Writings', href: 'writings.html' },
    { text: 'Links', href: 'links.html' },
    { text: 'Unpublished', href: 'unpublished.html' },
    { text: 'Visual Art', href: 'art.html' },
    { text: 'Digital Art', href: 'digital_art.html' }
  ]);
});