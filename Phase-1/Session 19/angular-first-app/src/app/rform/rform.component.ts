import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent {

  registerForm: FormGroup; //If you get error for this line add strictPropertyInitialization: false in tsconfig.json.
  submitted: boolean = false;
  users: any = [];
  isUpdating: boolean = false;
  selectedIndex: number = -1;

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.builder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  get form() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.registerForm.valid)
      return;
    alert("Form Submitted!");
    console.log(this.registerForm.value);
    if (!this.isUpdating) {
      this.users.push(this.registerForm.value);
    } else {
      console.log(this.registerForm.value)
      this.users[this.selectedIndex] = this.registerForm.value;
      this.isUpdating = false;
      this.selectedIndex = -1;
    }

    this.registerForm.reset();
    this.submitted = false;
  }

  deleteUser(index: any) {
    this.users.splice(index, 1);
  }

  updateUser(user: any, index: number) {
    console.log(user);
    console.log(this.registerForm)
    this.isUpdating = true;
    this.registerForm.patchValue(this.users[index]);
    this.isUpdating = true;
    this.selectedIndex = index;
  }

}
