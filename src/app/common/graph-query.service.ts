import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GraphJson } from './graph-json';

@Injectable({
  providedIn: 'root'
})
export class GraphQueryService {
  // Address to query the graph
  accountUrl = 'https://cm-api.tophold.com/account/page';
  constructor(private http: HttpClient) { }

  queryJSON() {
    return this.http.get<GraphJson>(this.accountUrl);
  }
  JsonConvert(data: GraphJson) {
    // console.log(data);
    let accountArray = [];
    let baseNodeArray = [];
    let cpArray = [];
    let retJson = '{' + '"nodes":[';
    data.data.forEach(function(term) {
      if ( !(accountArray.indexOf(term.a) > -1)) {
        retJson = retJson + '{' + '"id":' + '"' + term.a + '",'
          + '"label":' + '"' + term.a + '",'
          + '"color":' + '"' + term.rgb + '",';
      }
      switch (term.r) {
        case 1:
          retJson = retJson + '"size":' + '"' + '20' + '"';
          break;
        case 2:
          retJson = retJson + '"size":' + '"' + '25' + '"';
          break;
        case 3:
          retJson = retJson + '"size":' + '"' + '30' + '"';
          break;
        case 4:
          retJson = retJson + '"size":' + '"' + '35' + '"';
          break;
      }
      retJson = retJson + '},';
      accountArray.push(term.a);
      term.cp.forEach(function(cpAccount) {
        if (!(accountArray.indexOf(cpAccount.ca) > -1)) {
          retJson = retJson + '{' + '"id":' + '"' + cpAccount.ca + '",'
            + '"label":' + '"' + cpAccount.ca + '",'
            + '"color":' + '"' + cpAccount.rgb + '",';
          switch (cpAccount.r) {
            case 1:
              retJson = retJson + '"size":' + '"' + '20' + '"';
              break;
            case 2:
              retJson = retJson + '"size":' + '"' + '25' + '"';
              break;
            case 3:
              retJson = retJson + '"size":' + '"' + '25' + '"';
              break;
            case 4:
              retJson = retJson + '"size":' + '"' + '25' + '"';
              break;
          }
          retJson = retJson + '},';
          accountArray.push(cpAccount.ca);
        }
      });
    });
    /* cut the last comma */
    retJson = retJson.slice(0, retJson.length - 1);
    retJson = retJson + '], "edges": [';
    /* now we do the relation stuff */
    let id = 1;
    let currentNode = null;
    data.data.forEach(function(base) {
      currentNode = base.a;
      if (!(baseNodeArray.indexOf(base.a) > -1)) {
        base.cp.forEach(function(cpAccount) {
          if (!(cpArray.indexOf(cpAccount.ca) > -1)) {
            retJson = retJson + '{' + '"id":' + '"' + id + '",'
              + '"from":' + '"' + base.a + '",'
              + '"to":' + '"' + cpAccount.ca + '",'
              + '"color":' + '"' + '#ffffff' + '"' + '},';
            id++;
            cpArray.push(cpAccount.ca);
          }
        });
        cpArray = [];
      }
    });
    retJson = retJson.slice(0, retJson.length - 1);
    retJson = retJson + ']}';
    // console.log(JSON.parse(retJson));
    return JSON.parse(retJson);
  }
}
