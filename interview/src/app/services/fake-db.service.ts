import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Goal } from '../models/goal.model';
import { Objective } from '../models/objective.model';
import { User } from '../models/user.mode';

@Injectable({
  providedIn: 'root'
})
export class FakeDbService {
  private mockUsers: User[] = [
    {
      id: 1,
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Manager',
      createdAt: new Date('2024-01-15')
    },
    {
      id: 2,
      fullName: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'Developer',
      createdAt: new Date('2024-02-20')
    },
    {
      id: 3,
      fullName: 'Bob Johnson',
      email: 'bob.johnson@example.com',
      role: 'Designer',
      createdAt: new Date('2024-03-10')
    },
    {
      id: 4,
      fullName: 'Alice Williams',
      email: 'alice.williams@example.com',
      role: 'Developer',
      createdAt: new Date('2024-04-05')
    }
  ];

  private mockGoals: Goal[] = [
    {
      id: 1,
      name: 'Increase Revenue',
      description: 'Increase company revenue by 25% this quarter',
      createdAt: new Date('2024-01-01')
    },
    {
      id: 2,
      name: 'Improve Customer Satisfaction',
      description: 'Achieve 95% customer satisfaction rating',
      createdAt: new Date('2024-01-15')
    },
    {
      id: 3,
      name: 'Launch New Product',
      description: 'Successfully launch the new mobile app by Q3',
      createdAt: new Date('2024-02-01')
    },
    {
      id: 4,
      name: 'Team Growth',
      description: 'Expand the development team by 10 members',
      createdAt: new Date('2024-02-15')
    }
  ];

  private mockObjectives: Objective[] = [
    {
      id: 1,
      name: 'Implement Payment Gateway',
      objectiveType: 'Technical',
      assignedTo: 'Jane Smith',
      createdAt: new Date('2024-01-10')
    },
    {
      id: 2,
      name: 'Conduct User Research',
      objectiveType: 'Research',
      assignedTo: 'Bob Johnson',
      createdAt: new Date('2024-01-20')
    },
    {
      id: 3,
      name: 'Optimize Database Queries',
      objectiveType: 'Technical',
      assignedTo: 'Alice Williams',
      createdAt: new Date('2024-02-05')
    },
    {
      id: 4,
      name: 'Create Marketing Campaign',
      objectiveType: 'Marketing',
      assignedTo: 'John Doe',
      createdAt: new Date('2024-02-10')
    },
    {
      id: 5,
      name: 'Update Documentation',
      objectiveType: 'Documentation',
      assignedTo: 'Jane Smith',
      createdAt: new Date('2024-02-20')
    }
  ];

  private requestDelay = 500; // Simulate network delay in milliseconds

  constructor() { }

  // ==================== USER METHODS ====================

  getUsers(): Observable<User[]> {
    return of([...this.mockUsers]).pipe(delay(this.requestDelay));
  }

  getUserById(id: number): Observable<User | undefined> {
    const user = this.mockUsers.find(u => u.id === id);
    return user ? of({ ...user }).pipe(delay(this.requestDelay)) : throwError(() => new Error('User not found'));
  }

  // ==================== GOAL METHODS ====================

  getGoals(): Observable<Goal[]> {
    return of([...this.mockGoals]).pipe(delay(this.requestDelay));
  }

  getGoalById(id: number): Observable<Goal | undefined> {
    const goal = this.mockGoals.find(g => g.id === id);
    return goal ? of({ ...goal }).pipe(delay(this.requestDelay)) : throwError(() => new Error('Goal not found'));
  }

  // ==================== OBJECTIVE METHODS ====================

  getObjectives(): Observable<Objective[]> {
    return of([...this.mockObjectives]).pipe(delay(this.requestDelay));
  }

  getObjectiveById(id: number): Observable<Objective | undefined> {
    const objective = this.mockObjectives.find(o => o.id === id);
    return objective ? of({ ...objective }).pipe(delay(this.requestDelay)) : throwError(() => new Error('Objective not found'));
  }

  getObjectivesByAssignee(assignedTo: string): Observable<Objective[]> {
    const objectives = this.mockObjectives.filter(o => o.assignedTo === assignedTo);
    return of([...objectives]).pipe(delay(this.requestDelay));
  }

  getObjectivesByType(objectiveType: string): Observable<Objective[]> {
    const objectives = this.mockObjectives.filter(o => o.objectiveType === objectiveType);
    return of([...objectives]).pipe(delay(this.requestDelay));
  }

  // ==================== UTILITY METHODS ====================

  setRequestDelay(milliseconds: number): void {
    this.requestDelay = milliseconds;
  }

  resetData(): void {
    // Reset to initial mock data if needed
    console.log('Database reset to initial state');
  }
}
