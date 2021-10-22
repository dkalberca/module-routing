import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  isShown=false;

  name = new FormControl('',{
  });
  businessId = new FormControl('',{
  });
  address = new FormControl('',{
  });
  age = new FormControl('',{
  });
  salary = new FormControl('',{
  });
  number = new FormControl('',{
  });
  

  ngForm = new FormGroup({
    name: this.name,
    businessId: this.businessId,
    address: this.address,
    age: this.age,
    number: this.number,
    salary: this.salary,
  });

  constructor() { }

  ngOnInit(): void{
  }

  onSubmit(){
    console.log(this.ngForm.controls.name.value);
  }

  show(){
    this.isShown=!this.isShown
    }
}
