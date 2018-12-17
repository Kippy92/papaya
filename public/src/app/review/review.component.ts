import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['../bootstrap.css']
})
export class ReviewComponent implements OnInit {
  movie: any;
  newreview = {
    "name" : "",
    "rating" : 5,
    "comment" : ""
  }
  errors = {};

  constructor(private _filmservice: FilmService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      this.getMovie(params['id']);
    })
  }

  getMovie(id){
    let observable = this._filmservice.getOne(id);
    observable.subscribe( data => {
      this.movie = data['movie']
    })
  }

  newRating(id){
    let observable = this._filmservice.addReview(id, this.newreview);
    observable.subscribe( data => {
      if (data['status']== 'not ok'){
        this.errors = data['errors']['errors'];
      }
      else {
        this.getMovie(id);
        this.newreview = {
          "name" : "",
          "rating" : 5,
          "comment" : ""
        };
        this._router.navigate(['/']);
      } 
    })
  }

}