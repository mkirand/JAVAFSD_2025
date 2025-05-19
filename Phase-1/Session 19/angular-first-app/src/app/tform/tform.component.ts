import { Component } from '@angular/core';

@Component({
  selector: 'app-tform',
  templateUrl: './tform.component.html',
  styleUrls: ['./tform.component.css']
})

export class TformComponent {

  user: UserType = {
    firstName: "",
    lastName: "",
    password: "",
    email: ""
  }

  onSubmit() {
    alert("Form submitted Successfully!");
    console.log(this.user.firstName, " ", this.user.lastName);
    console.log(this.user.password, this.user.email)
  }

}

export type UserType = {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

