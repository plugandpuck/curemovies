import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuremoviesComponent } from './curemovies.component';
import { MovieComponent } from './movie/movie.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: CuremoviesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CuremoviesComponent, MovieComponent, SearchComponent]
})
export class CuremoviesModule { }
