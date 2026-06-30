import { Routes } from '@angular/router';

export const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },


  {
    path: 'task',
    loadComponent: () => import('./tasks/task.page').then( m => m.TaskPage)
  },
  {
    path: 'habits',
    loadComponent: () => import('./habits/habits.page').then( m => m.HabitsPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'statistics',
    loadComponent: () => import('./statistics/statistics.page').then( m => m.StatisticsPage)
  },

  {
    path:'login',
    loadComponent:()=>import('./login/login.page').then(m=>m.LoginPage)
  },

  {
  path:'register',
  loadComponent:()=>import('./register/register.page') .then(m=>m.RegisterPage)
  },

  {
  path:'password',
  loadComponent:()=>import('./password/password')
    .then(m=>m.PasswordPage)
  },

 ];

 