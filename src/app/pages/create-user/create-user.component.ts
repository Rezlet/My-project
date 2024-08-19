import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../core/model/classes/User';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  user = new User()

  applyForm = new FormGroup({
    firstName: new FormControl(Validators.required),
    lastName: new FormControl(Validators.required),
    userName: new FormControl(Validators.required),
    password: new FormControl(Validators.minLength(6)),
    projectName: new FormControl(Validators.required),
    role: new FormControl(Validators.required),
    canSubmit: new FormControl(false),
  })

  onSubmit() {
    console.log(this.applyForm.controls["password"])
  }
}
