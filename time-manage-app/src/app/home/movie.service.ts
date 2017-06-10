import { Injectable } from '@angular/core';
import { Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

export abstract class Show {
	constructor(public title: string, public year: number, public posterUrl: string) {
	}
}

export class Movie extends Show {
	constructor(json: any) {
		super(json.title, json.release_date, 'https://image.tmdb.org/t/p/w500'+json.poster_path);
	}
}

export class Series extends Show {
	constructor(json: any) {
		super(json.name, json.release_date, 'https://image.tmdb.org/t/p/w500'+json.backdrop_path);
	}
}

type ShowSearchResult = Movie | Show;

@Injectable()
export class MovieService {
	private readonly IMDBAPI = "https://api.themoviedb.org/3/";
	private readonly APIKEY = "";

	constructor(private jsonp: Jsonp) { 
	}

	Search(query: string): Observable<(ShowSearchResult)[]> {
		if(!query)
			return Observable.empty();

		return this.jsonp.request(this.IMDBAPI + 'search/multi?query=' + query + '&' + this.APIKEY + "&callback=JSONP_CALLBACK", {method: 'Get'})
		.map((resp: Response) => {
			return resp.json().results
			.filter(r => r.media_type == 'tv' || r.media_type == 'movie')
			.map(show => show.media_type == 'tv' ? new Series(show) : new Movie(show));
		});
	}
}

