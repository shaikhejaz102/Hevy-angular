import { Routes } from '@angular/router';
import { HomeComponent } from './MyComponents/home/home.component';
import { SignInComponent } from './MyComponents/sign-in/sign-in.component';
import { SignUpComponent } from './MyComponents/sign-up/sign-up.component';
import { WorkoutComponent } from './MyComponents/workout/workout.component';
import { NutritionComponent } from './MyComponents/nutrition/nutrition.component';
import { ContactComponent } from './MyComponents/contact/contact.component';

export const routes: Routes = [
    { path:'', component: HomeComponent },
    { path:'signIn', component: SignInComponent },
    { path:'signUp', component: SignUpComponent },
    { path:'workout', component: WorkoutComponent },
    { path:'nutrition', component: NutritionComponent },
    { path:'contact', component: ContactComponent },
];

