import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { PipesComponent } from './pipes/pipes.component';
import { NestedComponent } from './nested/nested.component';
import { HeaderComponent } from './header/header.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { TformComponent } from './tform/tform.component';
import { RformComponent } from './rform/rform.component';
import { UserListComponent } from './user-list/user-list.component';
import { CrudComponent } from './crud/crud.component';

const routes: Routes = [
  { path: "", component: HeaderComponent },
  { path: "weather", component: WeatherComponent },
  { path: "pipes", component: PipesComponent },
  { path: "tform", component: TformComponent },
  { path: "rform", component: RformComponent },
  {
    path: "nested", component: NestedComponent, children: [
      { path: "", redirectTo: "child-a", pathMatch: "full" },
      { path: "child-a", component: ChildAComponent },
      { path: "child-b", component: ChildBComponent }
    ]
  },
  { path: "users", component: UserListComponent },
  { path: "crud", component: CrudComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
