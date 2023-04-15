import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import autobind from 'autobind-decorator';

type Method = 'get' | 'post' | 'put' | 'delete';
type RequestMaker<M extends Method> = <T = {}>(
	url: `/${string}`,
	params?: Parameters<HttpClient[M]>[1]
) => Observable<T>;

@Injectable({
	providedIn: 'root',
})
export class ApiService {
	public constructor(private readonly http: HttpClient) {}

	@autobind
	private _errorHandler(error: any) {
		return throwError(() => error);
	}

	private _request<T, M extends Method>(
		method: M,
		url: `/${string}`,
		params?: Parameters<HttpClient[M]>[1]
	): Observable<T> {
		// @ts-expect-error
		return this.http[method](url, params)
			.pipe(catchError(this._errorHandler)) as Observable<T>;
	}

	get: RequestMaker<'get'> = this._request.bind(this, 'get') as any;
	post: RequestMaker<'post'> = this._request.bind(this, 'post') as any;
	put: RequestMaker<'put'> = this._request.bind(this, 'put') as any;
	delete: RequestMaker<'delete'> = this._request.bind(this, 'delete') as any;
}
