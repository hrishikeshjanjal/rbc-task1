import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'card-task1';
  users: any;
  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) {}
  ngOnInit() {
    this.userService.getUser().subscribe(
      (users: any) => {
        this.users = users;
        console.log(users);
      },
      (err) => {
        this.toastr.error(err.status, 'user Not found');
      }
    );
  }
}
