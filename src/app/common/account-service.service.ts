import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {
  // address to exchange the id into the token
  statsAddr = 'https://api.clearmarkets.org/getToken/localToken';

  constructor(private http: HttpClient) { }

  queryToken(accountId: string) {
    let parameters = {'accountId' : accountId};
    return this.http.get(this.statsAddr,  {params: parameters});
  }
}
