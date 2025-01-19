<template>
  <div class="home-container">
    <div class="content">
      <h1>{{ name }}</h1>
      <p class="tagline">Full-Stack Developer</p>
      <div class="contact-info">
        <a href="mailto:shanbhxg@gmail.com" target="_blank">
          <i class="fas fa-envelope"></i>
        </a>
        <a href="https://linkedin.com/in/deeptishanbhag" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/shanbhxg" target="_blank">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://medium.com/@shanbhxg" target="_blank">
          <i class="fab fa-medium"></i>
        </a>
        <a href="" target="_blank">
          <i class="fas fa-address-card"></i>
        </a>
      </div>
    </div>
    <div class="mesh-background"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Deepti Shanbhag",
    };
  },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");
@import url("https://fonts.googleapis.com/css2?family=Unica+One&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #ffffff;
}

.home-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: "Unica One", sans-serif;
  position: relative;
  overflow: hidden;
}

.content {
  z-index: 2;
  text-align: center;
}

h1 {
  font-size: 5em;
  font-weight: 700;
  color: #333333;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.1);
  animation: fadeInText 1s ease-out forwards;
}

p.tagline {
  font-size: 1.5em;
  color: #555555;
  margin-top: 10px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  animation: fadeInText 1.5s ease-out forwards;
}

.contact-info {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
}

.contact-info a {
  font-size: 2.2em;
  color: #555555;
  transition: transform 0.3s ease, color 0.3s ease;
}

.contact-info a:hover {
  transform: scale(1.2);
  color: #ff6b6b;
}

.mesh-background {
  position: absolute;
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
  background: linear-gradient(135deg, #ffffff, #f9f9f9);
  clip-path: polygon(
    10% 10%,
    40% 15%,
    80% 5%,
    90% 30%,
    70% 60%,
    30% 80%,
    5% 60%,
    15% 30%
  );
  transform: rotate(15deg);
  animation: meshAnimation 10s infinite alternate ease-in-out;
}

@keyframes meshAnimation {
  0% {
    clip-path: polygon(
      10% 10%,
      40% 15%,
      80% 5%,
      90% 30%,
      70% 60%,
      30% 80%,
      5% 60%,
      15% 30%
    );
  }
  100% {
    clip-path: polygon(
      5% 15%,
      35% 10%,
      75% 0%,
      95% 25%,
      65% 65%,
      25% 85%,
      0% 65%,
      20% 35%
    );
  }
}

@keyframes fadeInText {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* mobile-support */
@media (max-width: 768px) {
  h1 {
    font-size: 3.5em;
  }

  p.tagline {
    font-size: 1.2em;
  }

  .contact-info {
    gap: 20px;
  }

  .contact-info a {
    font-size: 1.8em;
  }
}
</style>
