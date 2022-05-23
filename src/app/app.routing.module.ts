
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { notFoundComponent } from './errors/not-found.component';
import { ViewComponent } from './view/view.component';


const routes: Routes =[
{path:'kanban',component:ViewComponent},
{path:'**',component:notFoundComponent}
];

@NgModule({

imports:[RouterModule.forRoot(routes)],


exports: [ RouterModule ]

})

export class AppRoutingModule{

}
