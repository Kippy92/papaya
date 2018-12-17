import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['../bootstrap.css']
})
export class SingleComponent implements OnInit {
  movie: any;
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

  delete(id){
    let observable = this._filmservice.deleteOne(id);
    observable.subscribe( data => {
      this._router.navigate(['/']);
    })
  }

}