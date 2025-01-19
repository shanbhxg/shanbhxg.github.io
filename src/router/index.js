import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HomeComp.vue';
import ProjectComp from '../components/ProjectComp.vue';
import BlogComp from '../components/BlogComp.vue';
import BlogList from '../components/BlogList.vue'; 

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/projects', name: 'projects', component: ProjectComp },
  { path: '/blog/:slug', name: 'blogpost', component: BlogComp, props: true },  
  { path: '/blog', name: 'blog', component: BlogList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
