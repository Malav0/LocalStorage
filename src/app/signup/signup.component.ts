import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform: FormGroup
  hide=true

  constructor(private fb: FormBuilder) {
    this.signupform=fb.group({
      firstname : new FormControl(),
      lastname : new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      phonenumber: new FormControl(),
      address : new FormControl(),
      pincode : new FormControl(),
      gender : new FormControl()

    })
   }

  ngOnInit(): void {
  }

  submitForm(){
    console.log(this.signupform);
    
  }
}
