import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Team } from './models/team';

@Injectable()
export class TeamService {

  constructor(private httpClient: HttpClient) { }

  public searchTeam(): Promise<Team[]> {
    return new Promise<Team[]>((resolve, reject) => {
      this.httpClient.get('http://localhost:8888/clubs/' + 'FC%20Talge')
        .subscribe(data => resolve(data as Team[]));
    });
  }
}