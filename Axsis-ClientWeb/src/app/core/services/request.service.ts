import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Base } from '../models/base.model';
import { ISerializer } from '../models/base.model';

@Injectable()
export class RequestService<T extends Base> {

  private basePath: string;

  constructor(
    private httpClient: HttpClient,
    private uri: string,
    private serializer: ISerializer,
    private url: string
  ) {
    this.basePath = url;
  }

  public get(): Observable<T> {
    return this.httpClient
      .get(`${this.basePath}${this.uri}`)
      .pipe(map((data: any) => this.serializer.fromJson(data) as T));
  }

  public getP(params: HttpParams): Observable<T> {
    return this.httpClient
      .get(`${this.basePath}${this.uri}`, { params })
      .pipe(map((data: any) => this.serializer.fromJson(data) as T));
  }

  public getListP(params: HttpParams): Observable<T[]> {
    console.log('urlGetList', `${this.basePath}${this.uri}/?${params}`);
    return this.httpClient
      .get(`${this.basePath}${this.uri}`, { params })
      .pipe(map((data: any) => this.convertData(data)));
  }
  public getList(metodo: any): Observable<T[]> {
    console.log('urlGetList', `${this.basePath}${this.uri}/${metodo}`);
    return this.httpClient
      .get(`${this.basePath}${this.uri}/${metodo}`)
      .pipe(map((data: any) => this.convertData(data)));
  }
  public post(item: T): Observable<any> {
    return this.httpClient.post<any>(`${this.basePath}${this.uri}`, this.serializer.toJson(item))
      .pipe(map(data => this.serializer.fromJson(data)));
  }
  public postMetodo(item: T, action: string): Observable<any> {
    return this.httpClient.post<any>(`${this.basePath}${this.uri}/${action}`, this.serializer.toJson(item))
      .pipe(map(data => this.serializer.fromJson(data)));
  }
  public postList(item: T): Observable<any[]> {
    return this.httpClient.post(`${this.basePath}${this.uri}`, this.serializer.toJson(item))
      .pipe(map((data: any) => this.convertData(data)));
  }

  public postUrl(item: T, action: string): Observable<any[]> {
    return this.httpClient.post(`${this.basePath}${this.uri}/${action}`, this.serializer.toJson(item))
      .pipe(map((data: any) => this.convertData(data)));
  }
  public postAnyUrl(item: any, action: string): Observable<any> {
    return this.httpClient.post(`${this.basePath}${this.uri}/${action}`, item)
      .pipe(map(data => this.serializer.fromJson(data)));
  }

  public deleteUrl(item: T): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: this.serializer.toJson(item),
    };
    return this.httpClient.delete(`${this.basePath}${this.uri}`, options)
      .pipe(map(data => this.serializer.fromJson(data)));
  }

  private convertData(data: any): T[] {
    return data.map(item => this.serializer.fromJson(item));
  }
}
