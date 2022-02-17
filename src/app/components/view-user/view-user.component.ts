import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
})
export class ViewUserComponent implements OnInit {
  id = '';
  name = '';
  address = '';
  age = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      // this.id = params['id'];
      this.name = params['name'];
      this.address = params['address'];
      this.age = params['age'];
    });
    this.activatedRoute.params.subscribe((param) => {
      this.id = param['id'];
    });
  }

  onClickBack() {
    // this.router.navigate(['/home']);
    this.location.back();
  }
}
