import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MovieDetailsService } from './movie-details.service';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  { path: 'movie_details', component: MovieDetailsComponent }
];

@NgModule({
  declarations: [
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [MovieDetailsService],
})
export class MovieModule { }
