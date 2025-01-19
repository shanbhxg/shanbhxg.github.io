<template>
  <div class="app-container">
    <nav class="navbar">
      <div class="hamburger" @click="toggleNavbar">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <ul class="navbar-nav" :class="{ 'active': isNavbarVisible }">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" exact title="Home">
            <i class="fas fa-home"></i>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/projects" class="nav-link" active-class="active" exact title="Projects">
            <i class="fas fa-briefcase"></i>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/blog" class="nav-link" active-class="active" exact title="Blog">
            <i class="fas fa-pencil-alt"></i>
          </router-link>
        </li>
      </ul>
    </nav>
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNavbarVisible: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarVisible = !this.isNavbarVisible;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@400;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #fff;
  color: #333;
  overflow: hidden;
  font-family: 'Archivo Narrow', sans-serif;
}

.app-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
  flex-direction: row;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 70px;
  height: 100vh;
  padding-top: 20px;
  background-color: #f7f7f7;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.navbar-nav {
  display: flex;
  flex-direction: column;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  transition: transform 0.3s ease-in-out;
}

.navbar-nav .nav-link {
  font-size: 2.5em;
  color: #888;
  text-align: center;
  transition: transform 0.3s ease, color 0.3s ease;
  position: relative;
}

.navbar-nav .nav-link:hover {
  transform: scale(1.2);
  color: #333;
}

.navbar-nav .nav-link.active {
  color: #333;
  transform: scale(1.2);
}

.navbar-nav .nav-link::after {
  content: attr(title);
  position: absolute;
  top: 25%;
  left: 100%;
  transform: translateX(10px);
  font-size: 4mm !important;
  color: #333;
  background-color: #fff;
  padding: 4px 8px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.navbar-nav .nav-link:hover::after {
  opacity: 1;
  visibility: visible;
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 10px;
  z-index: 4;
}

.hamburger .bar {
  height: 4px;
  width: 30px;
  margin: 4px 0;
  background-color: #333;
  transition: transform 0.3s ease, background-color 0.3s ease;
}
.main-content {
  margin-left: 70px;
  padding: 40px;
  overflow-y: auto;
  height: 100vh;
  width: calc(100vw - 70px);
  background-color: #fff;
  color: #333;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
}

h1, p {
  margin-bottom: 1em;
}

h1 {
  font-size: 3em;
  font-weight: bold;
  color: #333;
}

p {
  font-size: 1.2em;
  color: #555;
}

.contact-info {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
}

.contact-info a {
  font-size: 2em;
  color: #777;
  transition: transform 0.3s ease, color 0.3s ease;
}

.contact-info a:hover {
  transform: scale(1.3);
  color: #333;
}

/* mobile-support */
@media (max-width: 768px) {
  .app-container {
    flex-direction: column;
  }

  .navbar {
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 0;
  }

  .navbar-nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #f7f7f7;
    transform: translateX(-100%);
  }

  .navbar-nav.active {
    transform: translateX(0);
  }

  .hamburger {
    display: flex;
  }

  .hamburger .bar {
    background-color: #333;
  }

  .main-content {
    margin-top: 70px; 
    margin-left: 0;
    width: 100%;
    padding: 20px;
  }

  h1 {
    font-size: 2.5em;
  }

  p {
    font-size: 1em;
  }
}
</style>
