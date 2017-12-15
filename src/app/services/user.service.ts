import { Injectable } from "@angular/core";

import { User } from "../Models/user.model";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Session } from "../Models/session.model";
import { LocalStorageService } from "ngx-webstorage";



@Injectable()
export class UserService {

    private basePath: string = `http://localhost:5000/user`;
    private session: Session;

    constructor(
        private http: HttpClient, private local: LocalStorageService) { }


    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.basePath}`);
    }
    getUsersByID(id : string): Observable<User> {
        return this.http.get<User>(`${this.basePath}/${id}`);
    }
    create(user: User): Observable<User> {
        return this.http.post<User>(`${this.basePath}/create`, (user));
    }
<<<<<<< HEAD
    update(user: User): Observable<User> {
        return this.http.put<User>(`${this.basePath}`, (user));
    }
    getSession() {
        this.session = this.local.retrieve('token');
    }
=======

    putUser(user: User): Observable<User> {
        return this.http.put<User>(`${this.basePath}`, (user));
    }

>>>>>>> cd41639a68b65d1e8f25f7b7edc1038ebe9cb8e9
}