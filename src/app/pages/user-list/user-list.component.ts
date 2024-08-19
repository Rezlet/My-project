import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../core/service/user/user.service';
import { IUser } from '../../core/model/interfaces/IUser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  userService = inject(UserService)

  constructor(private modalService: NgbModal) {

  }
  userList: IUser[] = [] 
  ngOnInit(): void {
    this.loadUsers()
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  } 

  loadUsers() {
    this.userService.getUsers().subscribe((res: any) => {
      console.log(res)
      this.userList = res.data
    }) 
  }
}
