import { Component } from '@angular/core';
import { Goal } from 'src/app/models/goal.model';
import { Objective } from 'src/app/models/objective.model';
import { User } from 'src/app/models/user.mode';
import { FakeDbService } from 'src/app/services/fake-db.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  users!: User[];
  Goals!: Goal[];
  Objectives!: Objective[];

  constructor(private db: FakeDbService) { }

  ngOnInit(): void {
    this.db.getUsers().subscribe(users => { this.users = users; });
    this.db.getGoals().subscribe(goals => { this.Goals = goals; });
    this.db.getObjectives().subscribe(objectives => { this.Objectives = objectives; });
  }
}
