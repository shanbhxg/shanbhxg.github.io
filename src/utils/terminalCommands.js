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
        <br/>&nbsp;&nbsp;<span class="string">"title"</span>: <span class="string">"Engineer 2"</span>,
        <br/>&nbsp;&nbsp;<span class="string">"location"</span>: <span class="string">"Bengaluru, KA"</span>,
        <br/>&nbsp;&nbsp;<span class="string">"bio"</span>: <span class="string">"I'm a passionate web developer and AWS certified cloud practitioner. I love solving problems and turning ideas into reality through code."</span>,
        <br/>&nbsp;&nbsp;<span class="string">"interests"</span>: [<span class="string">"Web Development"</span>, <span class="string">"Machine Learning"</span>, <span class="string">"Jazz"</span>, <span class="string">"Literary Fiction"</span>]
      <br/>};
    `;
  },

  skills: () => {
    return `
      <span class="keyword">const</span> <span class="variable">skills</span> = {
        <br/>&nbsp;&nbsp;<span class="string">"languages"</span>: [
          <span class="string">"Python"</span>,
          <span class="string">"JavaScript"</span>,
          <span class="string">"SQL"</span>,
          <span class="string">"C"</span>,
          <span class="string">"HTML"</span>,
          <span class="string">"CSS"</span>
        ],
        <br/>&nbsp;&nbsp;<span class="string">"frontend"</span>: [
          <span class="string">"React"</span>,
          <span class="string">"Vue.js"</span>,
          <span class="string">"Next.js"</span>,
          <span class="string">"Electron"</span>
        ],
        <br/>&nbsp;&nbsp;<span class="string">"backend"</span>: [
          <span class="string">"Django"</span>,
          <span class="string">"FastAPI"</span>,
          <span class="string">"Node.js"</span>,
          <span class="string">"REST APIs"</span>
        ],
        <br/>&nbsp;&nbsp;<span class="string">"cloudAndDevOps"</span>: [
          <span class="string">"AWS Lambda"</span>,
          <span class="string">"API Gateway"</span>,
          <span class="string">"AWS SAM"</span>,
          <span class="string">"Docker"</span>,
          <span class="string">"Git"</span>,
          <span class="string">"GitHub Releases"</span>
        ],
        <br/>&nbsp;&nbsp;<span class="string">"authentication"</span>: [
          <span class="string">"Ping SSO"</span>,
          <span class="string">"LDAP"</span>,
          <span class="string">"Google OAuth"</span>,
          <span class="string">"MSAL"</span>
        ],
        <br/>&nbsp;&nbsp;<span class="string">"dataAndML"</span>: [
          <span class="string">"PostgreSQL"</span>,
          <span class="string">"MongoDB"</span>,
          <span class="string">"Firestore"</span>,
          <span class="string">"Pandas"</span>,
          <span class="string">"NumPy"</span>,
          <span class="string">"PyTorch"</span>,
          <span class="string">"NLP"</span>,
          <span class="string">"BERT"</span>,
          <span class="string">"R"</span>
        ],
        <br/>&nbsp;&nbsp;<span class="string">"other"</span>: [
          <span class="string">"Power Automate Flow"</span>,
          <span class="string">"Power Apps"</span>,
          <span class="string">"Figma"</span>
        ]
      <br/>};
    `;
  },

  projects: () => {
    return `
      <span class="keyword">const</span> <span class="variable">projects</span> = [
        <br/>&nbsp;&nbsp;{
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"name"</span>: <span class="string">"SOMNAI"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"description"</span>: <span class="string">"AI-powered dream journal analysing dreams through symbolism and psychological theories."</span>,
        <br/>&nbsp;&nbsp;},
        <br/>&nbsp;&nbsp;{
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"name"</span>: <span class="string">"TOADSTOOL"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"description"</span>: <span class="string">"Productivity website for tasks, habit tracking, goals, and a customisable dashboard."</span>,
        <br/>&nbsp;&nbsp;},
        <br/>&nbsp;&nbsp;{
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"name"</span>: <span class="string">"KADAMBARI"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"description"</span>: <span class="string">"Book tracker with Open Library search, reading logs, custom shelves, diary entries, and analytics."</span>,
        <br/>&nbsp;&nbsp;},
        <br/>&nbsp;&nbsp;{
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"name"</span>: <span class="string">"CINEMMA"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"description"</span>: <span class="string">"Movie diary with TMDb search, watch history, personal notes, and viewing analytics."</span>,
        <br/>&nbsp;&nbsp;},
        <br/>&nbsp;&nbsp;{
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"name"</span>: <span class="string">"CROSSWRD"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"description"</span>: <span class="string">"Crossword puzzle generator built with Vue.js and a Python API for clues."</span>,
        <br/>&nbsp;&nbsp;},
        <br/>&nbsp;&nbsp;{
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"name"</span>: <span class="string">"APIDAE"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"description"</span>: <span class="string">"Personalised job recommendation system using NLP, BERT, keyword extraction, and modified Artificial Bee Colony optimisation."</span>,
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
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"position"</span>: <span class="string">"Engineer 2 - Software Engineering"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"company"</span>: <span class="string">"Pratt and Whitney"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"duration"</span>: <span class="string">"10/2026 - Present"</span>,
        <br/>&nbsp;&nbsp;},
        <br/>&nbsp;&nbsp;{
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"position"</span>: <span class="string">"Graduate Engineer Trainee"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"company"</span>: <span class="string">"Pratt and Whitney"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"duration"</span>: <span class="string">"07/2024 - 09/2026"</span>,
        <br/>&nbsp;&nbsp;},
        <br/>&nbsp;&nbsp;{
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"position"</span>: <span class="string">"Intern"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"company"</span>: <span class="string">"Pratt and Whitney"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"duration"</span>: <span class="string">"01/2024 - 06/2024"</span>,
        <br/>&nbsp;&nbsp;},
        <br/>&nbsp;&nbsp;{
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"position"</span>: <span class="string">"Teaching Assistant"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"company"</span>: <span class="string">"PES University"</span>,
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"duration"</span>: <span class="string">"08/2023 - 12/2023"</span>,
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
    window.open("https://drive.google.com/file/d/1BFQ8JkoeLdjj6r2jigBggXhNTZthB8uM/view?usp=sharing", "_blank");
    return `
      <span class="comment">// Redirecting to resume.pdf...</span>
    `;
  },
};

export const handleCommand = (input) => {
  const command = input.trim().toLowerCase();
  if (commands[command]) {
    return commands[command]();
  }

  const safeCommand = command.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[character]));
  return `Command not found: ${safeCommand}. Type "help" to see available commands.`;
};
