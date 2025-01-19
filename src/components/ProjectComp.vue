<template>
  <div class="projects-container">
    <div class="content">
      <h1>My Projects</h1>
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.id" class="project-item">
          <div class="project-details">
            <h2>{{ project.title }}</h2>
            <p class="description">{{ project.description }}</p>
            <div class="project-links">
              <a :href="project.link" target="_blank" class="project-link">
                View Project
              </a>
              <a :href="project.github" target="_blank" class="github-link">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { id: 1, title: "CROSSWRD", description: "VueJS website that generates crossword puzzles with clues fetched from an API.", link: "https://crosswrd.vercel.app", github: "https://github.com/shanbhxg/crossword-generator" },
        { id: 2, title: "APIDAE", description: "Personalised job recommendation system using modified swarm optimization algorithm (ABC).", link: "https://apidae-jobrecsys.anvil.app/", github: "https://www.springer.com/series/15179" },
        { id: 3, title: "AMALGAM", description: "Nostalgic single player video game archive coded using MERN Stack.", link: "https://github.com/shanbhxg/amalgam", github: "hhttps://github.com/shanbhxg/amalgam" },
        { id: 4, title: "CHRONOSPHERE", description: "A BlueSky dashboard", link: "https://github.com/shanbhxg/cains-jawbone", github: "https://github.com/project4" },
        { id: 5, title: "CJ HELPER", description: "A virtual cork-board to help you solve Cain's Jawbone", link: "https://cains-jawbone.vercel.app/", github: "https://github.com/shanbhxg/cains-jawbone" },
      ]
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Unica+One&display=swap");
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #ffffff;
  font-family: "Unica One", sans-serif;
  color: #333333;
  position: relative;
}

.projects-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  position: relative;
}

.content {
  text-align: center;
  width: 100%;
  max-width: 1200px;
  position: relative;
  z-index: 2;
}

h1 {
  font-family: "Unica One", sans-serif;
  font-size: 3.5em;
  font-weight: 700;
  color: #333333;
  margin-bottom: 40px;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.1);
  animation: fadeInText 1s ease-out forwards;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  width: 100%;
  margin-top: 20px;
}

.project-item {
  position: relative;
  background: rgba(211, 211, 211, 0.5); 
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
}

.project-item:hover {
  background: #ffffff;
  transform: translateY(-10px);
  box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.2);
}

.project-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.project-item h2 {
  font-family: "Unica One", sans-serif;
  font-size: 2em;
  font-weight: 700;
  color: #333333;
  margin-bottom: 10px;
}

.project-item .description {
  font-size: 1.2em;
  color: #555555;
  margin-bottom: 20px;
  line-height: 1.4;
}

.project-links {
  display: flex;
  gap: 10px;
  margin-top: 10px;
  justify-content: center;
}

.project-link {
  font-size: 1.2em;
  color: #333333;
  text-decoration: none;
  font-weight: 600;
  border: 1px solid #333333;
  padding: 10px 20px;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s ease-in-out;
}

.project-link:hover {
  color: #ffffff;
  background-color: #ff6b6b;
  border-color: #ff6b6b;
  transform: scale(1.05);
}

.github-link {
  font-size: 1em; 
  color: #333333;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}

.github-link i {
  font-size: 1.5em; 
  color: #333333;
  margin-left: 8px;
}

.github-link:hover i {
  color: #ff6b6b; 
}

.github-link:hover {
  transform: scale(1.2); 
}

@media (max-width: 1200px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  .projects-container {
    display: block;
    height: 80vh;
  }
  .content{
    padding-bottom: 50px;
  }
}
</style>
