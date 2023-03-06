import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {
  baseURL = 'http://www.omdbapi.com/'
  key = 'edac38c7';
  constructor(private http: HttpClient) {}

  getData(id: string, title: string, year: string, plot: string){
    
    let url = this.baseURL;
    if(id || title || year || plot){
      url = url + '?';
    }
    if(id){
      url = url + 'i=' + id;
    }
    if(title){
      if(id){
        url = url + '&t=' + title;
      } else{
        url = url + 't=' + title;
      }
    }
    if(year){
      if(id || title){
        url = url + '&y=' + year;
      } else{
        url = url + 'y=' + year;
      }
    }
    if(plot){
      if(id || title || year){
        url = url + '&plot=' + plot;
      } else{
        url = url + 'plot=' + plot;
      }
    }
    console.log("getData", url + '&apikey=' + this.key);
    return this.http.get(url + '&apikey=' + this.key);
  }
}
