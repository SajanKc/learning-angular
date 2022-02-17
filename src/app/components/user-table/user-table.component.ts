import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
  tableData = [
    {
      id: '001',
      name: 'Sajan K.C.',
      address: 'Budhanilkantha',
      age: 25,
    },
    {
      id: '002',
      name: 'Ngima Sherpa',
      address: 'Kapan',
      age: 23,
    },
    {
      id: '003',
      name: 'Sita Thapa',
      address: 'Chabahil',
      age: 24,
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onNavigateById(
    id: string,
    paramName: string,
    paramAddress: string,
    paramAge: number
  ) {
    this.router.navigate(['/view-user', id], {
      queryParams: {
        id: id,
        name: paramName,
        address: paramAddress,
        age: paramAge,
      },
    });
  }

  onNavigateByUserIdAndClassId(
    uId: string,
    cId: string,
    paramName: string,
    paramAddress: string,
    paramAge: number
  ) {
    let url = '/view-user/' + uId + '/class/' + cId;
    this.router.navigate([url], {
      queryParams: {
        name: paramName,
        address: paramAddress,
        age: paramAge,
      },
    });
  }
}
