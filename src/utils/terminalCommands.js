// Available commands and their responses
const commands = {
  help: () => {
    return `
      <span class="keyword">Available commands:</span>
      <br/><span class="function">about</span> - Learn about me
      <br/><span class="function">skills</span> - View my technical skills
      <br/><span class="function">projects</span> - Browse my projects
      <br/><span class="function">contact</span> - Get in touch with me
      <br/><span class="function">experience</span> - View my work experience
      <br/><span class="function">education</span> - View my education background
      <br/><span class="function">clear</span> - Clear the terminal
      <br/><span class="function">social</span> - View my social media links
      <br/><span class="function">resume</span> - Download my resume
      <br/><span class="function">help</span> - Show this help message
    `;
  },

  about: () => {
    return `
      <span class="keyword">const</span> <span class="variable">developer</span> = {
        <br/>&nbsp;&nbsp;<span class="string">"name"</span>: <span class="string">"Deepti Shanbhag"</span>,
        <br/>&nbsp;&nbsp;<span class="string">"title"</span>: <span class="string">"Graduate Engineer Trainee"</span>,
        <br/>&nbsp;&nbsp;<span class="string">"location"</span>: <span class="string">"Bengaluru, KA"</span>,
        <br/>&nbsp;&nbsp;<span class="string">"bio"</span>: <span class="string">"I'm a passionate web developer with a strong focus on creating intuitive and efficient web applications. I love solving complex problems and turning ideas into reality through code."</span>,
        <br/>&nbsp;&nbsp;<span class="string">"interests"</span>: [<span class="string">"Web Development"</span>, <span class="string">"Machine Learning"</span>, <span class="string">"Jazz"</span>, <span class="string">"Literary Fiction"</span>]
      <br/>};
    `;
  },

  skills: () => {
    return `
      <span class="keyword">const</span> <span class="variable">skills</span> = {
        <br/>&nbsp;&nbsp;<span class="string">"programmingLanguages"</span>: [
          <span class="string">"SQL"</span>, 
          <span class="string">"Python"</span>, 
          <span class="string">"JavaScript"</span>, 
          <span class="string">"HTML"</span>, 
          <span class="string">"CSS"</span>, 
          <span class="string">"Java"</span>, 
          <span class="string">"C"</span>
        ],
        <br/>&nbsp;&nbsp;<span class="string">"toolsAndTechnologies"</span>: [
          <span class="string">"Git"</span>, 
          <span class="string">"AWS"</span>, 
          <span class="string">"Linux"</span>, 
          <span class="string">"ReactJS"</span>, 
          <span class="string">"NodeJS"</span>, 
          <span class="string">"NextJS"</span>, 
          <span class="string">"VueJS"</span>, 
          <span class="string">"Electron"</span>, 
          <span class="string">"Express"</span>, 
          <span class="string">"MongoDB"</span>, 
          <span class="string">"MySQL"</span>, 
          <span class="string">"NumPy"</span>, 
          <span class="string">"Pandas"</span>, 
          <span class="string">"PyTorch"</span>, 
          <span class="string">"Flask"</span>, 
          <span class="string">"Figma"</span>
        ],
        <br/>&nbsp;&nbsp;<span class="string">"languages"</span>: [
          <span class="string">"English"</span>, 
          <span class="string">"Hindi"</span>, 
          <span class="string">"Kannada"</span>, 
          <span class="string">"Konkani"</span>
        ],
        <br/>&nbsp;&nbsp;<span class="string">"softSkills"</span>: [
          <span class="string">"Teamwork"</span>, 
          <span class="string">"Attention to Detail"</span>, 
          <span class="string">"Leadership"</span>, 
          <span class="string">"Adaptability"</span>, 
          <span class="string">"Problem-solving"</span>
        ]
      <br/>};
    `;
  },

  projects: () => {
    return `
      <span class="keyword">const</span> <span class="variable">projects</span> = [
        <br/>&nbsp;&nbsp;{
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"name"</span>: <span class="string">"SOMNAI"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"description"</span>: <span class="string">"Full stack dream journal website that leverages AI to analyze dreams based on symbolism and psychological theories"</span>
        <br/>&nbsp;&nbsp;}
        <br/>&nbsp;&nbsp;{
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"name"</span>: <span class="string">"CROSSWRD"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"description"</span>: <span class="string">"A Vue.js website that generates crossword puzzles with clues fetched from an API."</span>,
        <br/>&nbsp;&nbsp;},
        <br/>&nbsp;&nbsp;{
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"name"</span>: <span class="string">"APIDAE"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"description"</span>: <span class="string">"Personalized job recommendation system using modified swarm optimization algorithm (ABC)."</span>,
        <br/>&nbsp;&nbsp;},
        <br/>&nbsp;&nbsp;{
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"name"</span>: <span class="string">"AMALGAM"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"description"</span>: <span class="string">"A nostalgic single-player video game archive coded using the MERN stack."</span>,
        <br/>&nbsp;&nbsp;},
        <br/>&nbsp;&nbsp;{
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"name"</span>: <span class="string">"CJ HELPER"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"description"</span>: <span class="string">"A virtual cork-board to help you solve Cain's Jawbone."</span>,
        <br/>&nbsp;&nbsp;}
      <br/>];
    `;
  },

  contact: () => {
    return `
      <span class="keyword">const</span> <span class="variable">contact</span> = {
        <br/>&nbsp;&nbsp;<span class="string">"email"</span>: <span class="string">"shanbhxg@gmail.com"</span>,
        <br/>&nbsp;&nbsp;<span class="string">"linkedin"</span>: <span class="string">"linkedin.com/in/shanbhxg"</span>,
        <br/>&nbsp;&nbsp;<span class="string">"github"</span>: <span class="string">"github.com/shanbhxg"</span>
      <br/>};
      <br/>
      <br/><span class="comment">// Feel free to get in touch! I'm always open to discussing new projects or opportunities.</span>
    `;
  },

  experience: () => {
    return `
      <span class="keyword">const</span> <span class="variable">experience</span> = [
        <br/>&nbsp;&nbsp;{
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"position"</span>: <span class="string">"Graduate Engineer Trainee"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"company"</span>: <span class="string">"Pratt and Whitney"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"duration"</span>: <span class="string">"07/2024 - Present"</span>,
        <br/>&nbsp;&nbsp;},
        <br/>&nbsp;&nbsp;{
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"position"</span>: <span class="string">"Intern"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"company"</span>: <span class="string">"Pratt and Whitney"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"duration"</span>: <span class="string">"01/2024 - 06/2024"</span>,
        <br/>&nbsp;&nbsp;},
        <br/>&nbsp;&nbsp;{
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"position"</span>: <span class="string">"Teaching Assistant"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"company"</span>: <span class="string">"PES University"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"duration"</span>: <span class="string">"08/2024 - 12/2024"</span>,
        <br/>&nbsp;&nbsp;}
      <br/>];
    `;
  },

  education: () => {
    return `
      <span class="keyword">const</span> <span class="variable">education</span> = [
        <br/>&nbsp;&nbsp;{
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"degree"</span>: <span class="string">"B.Tech. in Computer Science Engineering"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"institution"</span>: <span class="string">"PES University"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"year"</span>: <span class="number">2024</span>
        <br/>&nbsp;&nbsp;}
      <br/>];
    `;
  },

  clear: () => {
    return 'CLEAR_TERMINAL';
  },

  social: () => {
    return `
      <span class="keyword">const</span> <span class="variable">socialMedia</span> = {
        <br/>&nbsp;&nbsp;<span class="string">"github"</span>: <span class="string">"github.com/shanbhxg"</span>,
        <br/>&nbsp;&nbsp;<span class="string">"linkedin"</span>: <span class="string">"linkedin.com/in/deeptishanbhag"</span>,
        <br/>&nbsp;&nbsp;<span class="string">"medium"</span>: <span class="string">"medium.com/shanbhxg"</span>,
      <br/>};
    `;
  },

  resume: () => {
    window.open("https://drive.google.com/file/d/11zISwjX0pWpKV4a3-Pk-LMciEPf6W9nR/view?usp=drive_link", "_blank");
    return `
      <span class="comment">// Redirecting to resume.pdf...</span>
    `;
  },
};

// Handle command input
export const handleCommand = (input) => {
  const command = input.trim().toLowerCase();
  
  // Check if command exists
  if (commands[command]) {
    return commands[command]();
  }
  
  // Handle unknown commands
  return `Command not found: ${command}. Type "help" to see available commands.`;
};
