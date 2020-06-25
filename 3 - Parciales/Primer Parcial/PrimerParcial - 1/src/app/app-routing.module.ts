import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { ErrorComponent } from './paginas/error/error.component';
import { LoginComponent } from './paginas/login/login.component';
import { SingUpComponent } from './paginas/sing-up/sing-up.component';
import { AllComponent } from './paginas/all/all.component';
import { MajorArcanaComponent } from './paginas/major-arcana/major-arcana.component';
import { MinorArcanaComponent } from './paginas/minor-arcana/minor-arcana.component';
import { RandomComponent } from './paginas/random/random.component';
import { DetailComponent } from './paginas/detail/detail.component';
import { AuthLoggedGuard } from './guards/auth-logged.guard';
import { UserComponent } from './paginas/user/user.component';
import { FavsComponent } from './paginas/favs/favs.component';
import { SearchComponent } from './paginas/search/search.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signUp', component: SingUpComponent
  },
  {
    path: 'all', component: AllComponent, canActivate: [AuthLoggedGuard],
  },
  {
    path: 'majorArcana', component: MajorArcanaComponent, canActivate: [AuthLoggedGuard],
  },
  {
    path: 'minorArcana', component: MinorArcanaComponent, canActivate: [AuthLoggedGuard],
  },
  {
    path: 'random', component: RandomComponent, canActivate: [AuthLoggedGuard],
  },
  {
    path: 'user', component: UserComponent
  },
  {
    path: 'detail/:id', component: DetailComponent, canActivate: [AuthLoggedGuard],
  },
  {
    path: 'favs', component: FavsComponent
  },
  {
    path: 'search/:param', component: SearchComponent, canActivate: [AuthLoggedGuard],
  },
  
  {
    path: '**', component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
