import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  listCongratulate: any = [];

  constructor(private httpClient: HttpClient) { }

  async getAllCongratulate() {
    this.httpClient.get('../../../assets/database/congratulate.json').subscribe(data => {
      this.listCongratulate = data;
    });

    return this.listCongratulate;
  }
}
