import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
