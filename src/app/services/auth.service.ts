import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {filter, Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {LoadingService} from "./loading.service";
import {ActivatedRoute, Router} from "@angular/router";
import {InterfacesUser} from "../shered/interfaces";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userId: string = "";
  public previousUrl: string = "";
  constructor(
    private http: HttpClient,
    private loading: LoadingService,
    private router: Router,
    private route: ActivatedRoute) {
    if (!this.userId) {
      this.my();
    }
  }

  my() {
    this.loading.status.emit(true);
    this.http.get<{id: string}>("/api/v1/user").subscribe((res) => {
      this.loading.status.emit(false);
      this.userId = res.id;
      if (["/login", "/register"].includes(this.getUrlWithoutParams())) {
        this.router.navigateByUrl(this.route.snapshot.queryParams['accessDenied'] ? this.previousUrl : '/board');
      } else {
        this.router.navigateByUrl(this.previousUrl);
      }
    }, (error) => {
      this.loading.status.emit(false);
      if (!["/login", "/register"].includes(this.getUrlWithoutParams())) {
        this.router.navigateByUrl('/login');
      }
    });
  }

  login(user: InterfacesUser.INewUser): Observable<{ data: { user: InterfacesUser.IUser} }> {
    return this.http.post<{ data: { user: InterfacesUser.IUser } }>("/api/v1/auth/login", user)
      .pipe(
        tap(
          ({data}) => {
            this.userId = data.user.id;
          }
        )
      )
  }

  register(user: InterfacesUser.INewUser): Observable<{ data: { user: InterfacesUser.IUser } }> {
    return this.http.post<{ data: { user: InterfacesUser.IUser } }>("/api/v1/auth/register", user)
      .pipe(
        tap(
          ({data}) => {
            this.userId = data.user.id;
          }
        )
      )
  }

  logout(): void {
    this.loading.status.emit(true);
    this.http.delete('/api/v1/auth/logout').subscribe(
      () => {
        this.userId = "";
        this.router.navigateByUrl('/login');
        this.loading.status.emit(false);
      }, (err) => {
        console.error(err);
        this.loading.status.emit(false);
      }
    );
  }

  isLogin(): boolean{
    return !!this.userId;
  }

  getUrlWithoutParams(){
    let urlTree = this.router.parseUrl(this.router.url);
    urlTree.queryParams = {};
    urlTree.fragment = null; // optional
    return urlTree.toString();
  }
}
