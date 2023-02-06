import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ICategory, INewCategory} from "../redux/category/category.model";

@Injectable({
  providedIn: "platform"
})
export class CategoryApi {
  constructor(protected http: HttpClient) {}

  getCategories(): Observable<{ data: ICategory[] }> {
    return this.http.get<{ data: ICategory[] }>("/api/v1/categories");
  }

  newCategory(payload: INewCategory): Observable<{data: ICategory}> {
    return this.http.post<{ data: ICategory }>("/api/v1/categories", payload);
  }

  showCategory(uuid: string): Observable<{ data: ICategory }> {
    return this.http.get<{ data: ICategory }>(`/api/v1/categories/${uuid}`)
  }
}
