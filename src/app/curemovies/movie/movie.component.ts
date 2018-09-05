import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies: any[];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
  }
}
