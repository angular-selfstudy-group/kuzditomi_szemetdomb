import { Injectable } from '@angular/core';
import { Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

export interface Movie {
	title: string;
}

@Injectable()
export class MovieService {
	private readonly IMDBAPI = "https://api.themoviedb.org/3/";
	private readonly APIKEY = "";
	private times: number;

	constructor(private jsonp: Jsonp) { 
		this.times = 0;
	}

	Search(query: string): Observable<string[]> {
		if(!query)
			return Observable.empty();

		return this.jsonp.get(this.IMDBAPI + 'search/multi?query=' + query + '&' + this.APIKEY + "&callback=__ng_jsonp__.__req"+(this.times++)+".finished")
			.map((resp: Response) => {
				return resp.json().results
					.map(r => r.name || r.title);
			});
	}
}
