import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Movie, MovieService } from './movie.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent {
	search: FormControl;
	showSearchResults: Observable<string[]>;

	constructor(private movieService: MovieService ) { 
		this.search = new FormControl();
		this.showSearchResults = this.search.valueChanges
			.debounceTime(500)
			.startWith(null)
			.flatMap(term => {
				return this.movieService.Search(term)
					.map(result => result);
			})
			.map(results => results);
	}
}