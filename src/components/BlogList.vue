<template>
    <div class="blog-list container my-5">
      <h1 class="text-center mb-4">Blog Posts</h1>
      <div class="row">
        <div
          class="col-md-4 mb-4"
          v-for="post in posts"
          :key="post.slug"
        >
          <div class="card h-100 shadow-sm border-light">
            <div class="card-body">
              <h5 class="card-title">{{ post.title }}</h5>
              <p class="card-text">{{ post.excerpt }}</p>
              <router-link :to="'/blog/' + post.slug" class="blog-link">
                Read More
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { marked } from 'marked';
  
  export default {
    data() {
      return {
        posts: [],
      };
    },
    async created() {
      this.loadPosts();
    },
    methods: {
      async loadPosts() {
        const postSlugs = ['first']; 
  
        const posts = await Promise.all(
          postSlugs.map(async (slug) => {
            const response = await import(`@/blog/${slug}.md`);
            const markdown = response.default;
            const html = marked(markdown);
  
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            const textContent = tempDiv.textContent || tempDiv.innerText || '';
            const excerpt = textContent.replace(/^.*\n/, '');

  
            const title = this.getTitleFromMarkdown(markdown);
  
            return { slug, title, excerpt };
          })
        );
  
        this.posts = posts;
      },
      getTitleFromMarkdown(markdown) {
        const firstLine = markdown.split('\n')[0];
        return firstLine.replace(/^#\s/, '');
      },
    },
  };
  </script>
  
  <style scoped>  
  @import url('https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@400;600&display=swap');

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

  .blog-list {
    max-width: 1200px;
  }
  
  .card {
    font-family: 'Archivo Narrow', sans-serif;
    font-size: 1.2em;
    transition: transform 0.3s ease-in-out;
  }
  
  .card:hover {
    transform: translateY(-5px);
  }

  .card-title {
    font-size: 1.5em;
    font-weight: 600;
    color: #333333;
  }

  .card:hover {    
    .card-title {
      color: #ff6b6b;
    }
    .blog-link {
      color: #ffffff;
      background-color: #ff6b6b;
      transform: scale(1.05);
    }
  }

  .blog-link {
    color: #333333;
    background: rgba(211, 211, 211, 0.5); 
    text-decoration: none;
    font-weight: 600;
    padding: 10px 20px;
    border-radius: 8px;
    text-align: center;
    transition: all 0.3s ease-in-out;
  }
  </style>
  