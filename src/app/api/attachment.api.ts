import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: "platform"
})
export class AttachmentApi {
  constructor(protected http: HttpClient) {}

  protected getChildrenOfAttachment() {
    return this.http.get("/lifeCheck");
  }
}
