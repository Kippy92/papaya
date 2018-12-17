import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['../bootstrap.css']
})
export class ListComponent implements OnInit {
  movies = [];
    constructor(private _filmservice: FilmService) { }
  
    ngOnInit() {
      this.getAllMovies();
    }
  
    getAllMovies(){
      let observable = this._filmservice.getMovies();
      observable.subscribe( data => {
        this.movies = data['movies'];
        console.log(data);
      });
    }
  
  }