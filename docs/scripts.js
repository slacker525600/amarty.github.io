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
    { text: 'Fiction', href: 'index.html' },
    { text: 'Nonfiction', href: 'about.html' },
    { text: 'Multimedia', href: 'writings.html' },
    { text: 'Contact', href: 'links.html' },
  ]);
});
