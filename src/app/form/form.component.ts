import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  states = ['stable', 'critical', 'finished'];
  loginForm: FormGroup;
  forbiddenUsernames = ['test']
  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup  ({
      'project-name':new FormControl('name',[Validators.required, this.forbiddenName.bind(this)] ),
      'email':new FormControl('email',[Validators.required, Validators.email] ),
      'state':new FormControl('stable',Validators.required )
    })
  }
  onSubmit  ()  {
    console.log(this.loginForm);
  }
  forbiddenName (control: FormControl):{ [s:string]:boolean}  {
    if (this.forbiddenUsernames.indexOf(control.value))
    {
      return {'nameIsForbidden': true }
    }
    return null;
  }
}
