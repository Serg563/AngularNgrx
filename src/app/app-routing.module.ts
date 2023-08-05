import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { CounterComponent } from './Counter/counter.component';
import { PostComponent } from './post/post.component';
import { AddPostComponent } from './post/add-post/add-post.component';
import { UpdatePostComponent } from './post/update-post/update-post.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'counter',
    loadChildren: () =>
      import('./Counter/counter.module').then((m) => m.CounterModule),
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('../app/post/post.module').then((d) => d.PostModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
