import Vue from 'vue';
import Router from 'vue-router';
import Projects from '@/components/Projects/Projects';
import AddProject from '@/components/Projects/AddProject';
import Project from '@/components/Projects/Project';
import DeleteProject from '@/components/Projects/DeleteProject';
import EditProject from '@/components/Projects/EditProject';
import Login from '@/components/Authentication/Login';
import Register from '@/components/Authentication/Register';
import LoginRegister from '@/components/Authentication/LoginRegister';
import HomePage from '@/components/HomePage';
import NoContent from '@/components/NoContent';
import Sprints from '@/components/Sprints/Sprints';
import Sprint from '@/components/Sprints/Sprint';
import EditSprint from '@/components/Sprints/EditSprint';
import DeleteSprint from '@/components/Sprints/DeleteSprint';
import GitHubCallBack from '@/components/GitHub/GitHubCallBack';
import GitHubProjects from '@/components/GitHub/GitHubProjects';
import Releases from '@/components/Releases/Releases';
import Release from '@/components/Releases/Release';
import UserProfile from '@/components/Users/UserProfile';
import EditUserProfile from '@/components/Users/EditUserProfile';
import DeleteUserProfile from '@/components/Users/DeleteUserProfile';
import NotFound from '@/components/NotFound';
import Retrospective from '@/components/Retrospective/Retrospective';
import Revision from '@/components/Revision/Revision';
import Gpa from '@/components/Gpa';
import Issues from '@/components/Issues/Issues';
import Velocity from '@/components/Sprints/Velocity';
import Burndown from '@/components/Sprints/Burndown';

Vue.use(Router);

const router = new Router({

  routes: [
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
    },
    {
      path: '/addproject',
      name: 'AddProject',
      component: AddProject,
    },
    {
      path: '/projects/:id',
      name: 'Project',
      component: Project,
    },
    {
      path: '/deleteproject',
      name: 'DeleteProject',
      component: DeleteProject,
    },
    {
      path: '/editproject/:id',
      name: 'EditProjects',
      component: EditProject,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },

    {
      path: '/register',
      name: 'Register',
      component: Register,
    },

    {
      path: '/loginregister',
      name: 'LoginRegister',
      component: LoginRegister,
    },

    {
      path: '/user',
      name: 'UserProfile',
      component: UserProfile,
    },

    {
      path: '/edituser',
      name: 'EditUserProfile',
      component: EditUserProfile,
    },

    {
      path: '/deleteuser',
      name: 'DeleteUserProfile',
      component: DeleteUserProfile,
    },
    {
      path: '/githubcallback',
      name: 'GitHubCallBack',
      component: GitHubCallBack,
    },

    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/releases/:id/sprints',
      name: 'Sprints',
      component: Sprints,
    },
    {
      path: '/sprints/:id',
      name: 'Sprint',
      component: Sprint,
    },
    {
      path: '/deletesprint',
      name: 'DeleteSprint',
      component: DeleteSprint,
    },
    {
      path: '/githubprojects',
      name: 'GitHubProjects',
      component: GitHubProjects,
    },
    {
      path: '/editsprint',
      name: 'EditSprint',
      component: EditSprint,
    },
    {
      path: '/projects/:id/releases',
      name: 'Releases',
      component: Releases,
    },
    {
      path: '/releases/:id',
      name: 'Release',
      component: Release,
    },
    {
      path: '/nocontent',
      name: 'NoContent',
      component: NoContent,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
    {
      path: '/gpa',
      name: 'Gpa',
      component: Gpa,
    },
    {
      path: '/projects/:id/issues',
      name: 'Issues',
      component: Issues,
    },
    {
      path: '/retrospectives/:id',
      name: 'Retrospective',
      component: Retrospective,
    },
    {
      path: '/sprints/:id/burndown',
      name: 'Burndown',
      component: Burndown,
    },
    {
      path: '/revisions/:id',
      name: 'Revision',
      component: Revision,
    },
    {
      path: '/sprints/:id/velocity',
      name: 'Velocity',
      component: Velocity,
    },
  ],
});

export default router;

router.beforeEach((to, from, next) => {
  const state = JSON.parse(localStorage.getItem('vuex'));

  if (to.path === '/' || to.path === '/notFound') {
    next();
  } else if (!to.matched.length) {
    next('/notFound');
  } else if (state.auth.token === null) {
    next('/');
  } else {
    next();
  }
});
