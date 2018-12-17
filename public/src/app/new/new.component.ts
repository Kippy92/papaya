import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['../bootstrap.css']
})
export class NewComponent implements OnInit {
  movie = {
    "name": '',
    "initial": {
      "name" : "",
      "rating" : 5,
      "comment" : ""
    }
  }
  errors = {};
  constructor(private _filmService: FilmService, private _router: Router) { }

  ngOnInit() {
  }
  create(){
    let observable = this._filmService.createMovie(this.movie);
    observable.subscribe(data => {
      console.log(data);
      if (data['status']== 'not ok'){
        this.errors = data['errors']['errors'];
      } 
      else {
        this._router.navigate(['/']);
      }
    });
  }

}