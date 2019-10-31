import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowBooksComponent} from '../pages/show-books/show-books.component';

const routes: Routes = [
  { path: '', component: ShowBooksComponent},
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule {}
