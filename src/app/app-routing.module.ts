import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './user/about/about.component';
import { SkillsComponent } from './user/skills/skills.component';
import { AvailabilityComponent } from './user/availability/availability.component';


const routes: Routes = [
{path:'',component:UserComponent},
{path:'about',component:AboutComponent},
{path:'skills',component:SkillsComponent},
{path:'avail',component:AvailabilityComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
