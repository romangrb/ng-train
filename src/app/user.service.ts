import { Injectable } from '@angular/core';

import { CounterService } from './counter.service';

@Injectable()
export class UserService {
  activeUsers = ['Chris', 'Manu'];
  inactiveUsers = ['Anna', 'Max'];

  constructor(private counterService: CounterService) { }

  setUserToInactive(id: number): void {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.logActiveUser();
  }

  setUserToActive(id: number): void {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.logInactiveUser();
  }
}