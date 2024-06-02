import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { StartComponent } from './start/start.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { RandomChampionComponent } from './random-champion/random-champion.component';
import { SingleChampionComponent } from './single-champion/single-champion.component';

export const routes: Routes = [
    { path: '', component: StartComponent },
    { path: 'home', component: HomeComponent },
    { path: 'sign-in', component: SignInComponent },
    { path: 'favorites', component: FavoritesComponent },
    { path: 'random-champion', component: RandomChampionComponent },
    { path: 'champion/:id', component: SingleChampionComponent }
];
