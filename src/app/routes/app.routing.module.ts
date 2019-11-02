import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowBooksComponent} from '../pages/show-books/show-books.component';
import {FormBookComponent} from '../pages/form-book/form-book.component';

const routes: Routes = [
  { path: '', component: ShowBooksComponent},
  { path: 'adicionar', component: FormBookComponent},
  { path: 'editar/:id', component: FormBookComponent},
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule {}
