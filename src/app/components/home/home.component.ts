import { Component, OnInit } from '@angular/core';
import { UsersdataService } from 'src/app/services/usersdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users: any;
  constructor(private usersData: UsersdataService) {
    this.usersData.users().subscribe((data) => {
      this.users = data;
    });
  }

  ngOnInit(): void {}
}
