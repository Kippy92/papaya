import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private _http: HttpClient) { }

  getMovies(){
    return this._http.get('/movie');
  }
  createMovie(movie){
    return this._http.post('/movie', movie);
  }
  getOne(id){
    return this._http.get(`/movie/${id}`);
  }

  addReview(id, review){
    return this._http.post(`/movie/${id}/review`, review);
  }

  updateOne(id, movie){
    return this._http.put(`/movie/${id}`, movie);
  }

  deleteOne(id){
    return this._http.delete(`/movie/${id}`);
  }
}