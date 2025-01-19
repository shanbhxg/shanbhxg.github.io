<template>
  <div class="blog-post">
    <router-link to="/blog" class="back-link">
      <i class="fas fa-arrow-left"></i>
    </router-link>
    <div v-html="postContent"></div>
  </div>
</template>

<script>
import { marked } from 'marked';

export default {
  props: ['slug'], 
  data() {
    return {
      postContent: '',
    };
  },
  async created() {
    try {
      const response = await import(`@/blog/${this.slug}.md`); 
      const markdown = response.default;

      this.postContent = marked(markdown);
    } catch (error) {
      console.error(`Error loading blog post: ${error}`);
    }
  },
};
</script>

<style scoped>
.blog-post {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}



.blog-post h1 {
  font-size: 3em;
  margin-bottom: 20px;
}

.blog-post p {
  font-size: 1.1em;
  line-height: 1.6;
}

.blog-post a {
  color: #ff6b6b;
  text-decoration: none;
}

.blog-post a:hover {
  text-decoration: underline;
}

.back-link {
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
  color: #333333;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.3s ease-in-out;
}

.back-link:hover {
  transform: translateX(-5px);
}

.back-link i {
  font-size: 2em;
}



</style>
