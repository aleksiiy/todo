import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as Interfaces from "../shered/interfaces"
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {LoadingService} from "./loading.service";
import {Router} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userId: string = ""
  constructor(
    private http: HttpClient,
    private loading: LoadingService,
    private router: Router) {
    if (!this.userId) {
      this.my();
    }
  }

  my() {
    this.loading.status.emit(true);
    this.http.get<{id: string}>("/api/v1/user").subscribe((res) => {
      this.loading.status.emit(false);
      this.router.navigateByUrl('/board');
      this.userId = res.id;
    }, (error) => {
      this.loading.status.emit(false);
      if (!["/login", "/register"].includes(this.router.url)) {
        this.router.navigateByUrl('/login');
      }
    });
  }

  login(user: Interfaces.IUser): Observable<{ data: { user: Interfaces.IUser } }> {
    return this.http.post<{ data: { user: Interfaces.IUser } }>("/api/v1/auth/login", user)
      .pipe(
        tap(
          ({data}) => {
            this.userId = data.user.id;
          }
        )
      )
  }
}
