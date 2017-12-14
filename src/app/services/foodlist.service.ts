import { Injectable } from "@angular/core";

import { Details } from "../Models/detail.model";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";



@Injectable()
export class DetailsService {

    private basePath: string = `http://localhost:5000/details/foodDetails`;

    constructor(
        private http: HttpClient) { }


    getDetail(): Observable<Details[]> {
        return this.http.get<Details[]>(`${this.basePath}`);
    }
}