const parentComponent = document.getElementById("gallery");

const galleryList = [
  // {
  //   username: "user1",
  //   github_link: "https://github.com/user/project1",
  //   demo_link: "https://project1.example.com",
  //   image_link: "image1.jpg",
  //   project_title: "Project 1",
  // },
  // {
  //   username: "user2",
  //   github_link: "https://github.com/user/project2",
  //   demo_link: "https://project2.example.com",
  //   image_link: "image2.jpg",
  //   project_title: "Project 2",
  // },
];

if (galleryList.length === 0) {
  parentComponent.innerHTML = `<h1 class="text-black text-3xl">Waiting for projects...</h1>`;
}

galleryList.forEach((item) => {
  const container = document.createElement("div");
  container.className =
    "card p-12 border border-3 border-sky-300 rounded-3xl transition duration-250 hover:border-sky-500 hover:scale-105 flex flex-col";
  container.style.background = `url("${item.image_link}") center/cover no-repeat`;

  const title = document.createElement("h2");
  title.className = "text-3xl font-bold mb-4";
  title.textContent = item.project_title;

  const links = document.createElement("div");
  links.className = "flex justify-evenly mt-4";

  const githubLink = document.createElement("a");
  githubLink.href = item.github_link;
  githubLink.target = "_blank";
  githubLink.rel = "noopener noreferrer";
  githubLink.textContent = "GitHub";

  const demoLink = document.createElement("a");
  demoLink.href = item.demo_link;
  demoLink.target = "_blank";
  demoLink.rel = "noopener noreferrer";
  demoLink.textContent = "Live Demo";

  const userName = document.createElement("span");
  userName.textContent = item.username;

  links.appendChild(userName);
  links.appendChild(githubLink);
  links.appendChild(demoLink);

  container.appendChild(title);
  container.appendChild(links);
  parentComponent.appendChild(container);
});
