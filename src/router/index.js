import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import LoginView from '../views/auth/LoginView.vue';
import RegistrationView from '../views/auth/RegistrationView.vue';
import ProfileView from '../views/ProfileView.vue';
import Me from '../components/user/Me.vue';
import Explore from '../components/user/Explore.vue';
import Notifications from '../components/user/Notifications.vue';
import Shelf from '../components/user/Shelf.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegistrationView,
    },
    // Protected routes - require authentication
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: { requiresAuth: true },
    },
    {
      path: '/explore',
      name: 'explore',
      component: Explore,
      meta: { requiresAuth: true },
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: Notifications,
      meta: { requiresAuth: true },
    },
    {
      path: '/shelf',
      name: 'shelf',
      component: Shelf,
      meta: { requiresAuth: true },
    },
    {
      path: '/me',
      name: 'me',
      component: Me,
      meta: { requiresAuth: true },
    },
    // Not found route
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: NotFoundView,
    },
  ],
});

// Navigation guard to check authentication
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('access_token');

  if (to.meta.requiresAuth && !isAuthenticated) {
    // Redirect to login if not authenticated and trying to access a protected route
    next({ name: 'login' });
  } else {
    // Proceed to the intended route
    next();
  }
});

export default router;
