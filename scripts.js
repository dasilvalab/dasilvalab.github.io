async function loadPeople() {
  const res = await fetch('lab_data.json');
  const data = await res.json();
  const container = document.getElementById('people');
  data.people.forEach(p => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `<strong>${p.name}</strong><br>${p.role}<p style="display:none">${p.bio}</p>`;
    div.onclick = () => {
      const bio = div.querySelector('p');
      bio.style.display = bio.style.display === 'none' ? 'block' : 'none';
    };
    container.appendChild(div);
  });
}
async function loadPublications() {
  const res = await fetch('lab_data.json');
  const data = await res.json();
  const container = document.getElementById('publications');
  data.publications.forEach(pub => {
    const div = document.createElement('div');
    div.className = 'card';
    div.textContent = pub.title + " (" + pub.year + ")";
    container.appendChild(div);
  });
}
if (document.getElementById('people')) loadPeople();
if (document.getElementById('publications')) loadPublications();