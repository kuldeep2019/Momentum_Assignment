import { Component, OnInit } from '@angular/core';
import { MovieDetailsService } from '../movie-details.service';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  id: string = '';
  title: string = '';
  year: string = '';
  plot: string = '';
  options = ['Short', 'Full'];
  movieDetails: any;
  constructor(private movieDetailsService: MovieDetailsService) { }

  ngOnInit(): void {
  }

  onSearch() {
    console.log("event:", this.id, this.title, this.year, this.plot);
    this.movieDetailsService.getData(this.id, this.title, this.year, this.plot).subscribe((result) => {
      let res:any = result;
      console.log(result);
      if(res.Response == "True"){
      this.movieDetails = result;
      } else{
        this.movieDetails = undefined;
      }
      console.log(this.movieDetails);
    });
  }

}
