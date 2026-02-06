import { Injectable } from '@angular/core';
import { FakeDbService } from './fake-db.service';
import { Observable } from 'rxjs';
import { User } from '../models/user.mode';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private db: FakeDbService) { }

  getUsers() {
    return this.db.getUsers();
  }

  getUserDetails(userId: number): Observable<User | undefined> {
    return this.db.getUserById(userId);
  }
}
