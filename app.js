// Fetch projects from the backend
fetch('http://localhost:5000/projects')
  .then((res) => res.json())
  .then((data) => {
    const projectList = document.getElementById('project-list');
    data.projects.forEach((project) => {
      const div = document.createElement('div');
      div.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;
      projectList.appendChild(div);
    });
  });

// Fetch blog posts from the backend
fetch('http://localhost:5000/blog')
  .then((res) => res.json())
  .then((data) => {
    const blogPosts = document.getElementById('blog-posts');
    data.posts.forEach((post) => {
      const li = document.createElement('li');
      li.textContent = post.title;
      blogPosts.appendChild(li);
    });
  });

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  fetch('http://localhost:5000/contact', {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .then((data) => {
      document.getElementById('response-message').textContent = data.message;
    });
});