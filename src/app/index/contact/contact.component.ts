import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactAddress = '192.168.1.44:8080/contact/send';
  messageForm: FormGroup;
  submitted = false;
  success = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      companyName: ['', Validators.required],
      email: ['', Validators.required],
      companyLink: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.messageForm.invalid) {
      return;
    }
    this.success = true;
  }
  onFakeSubmit() {
    alert('successfully sent! Thank you for your participation!');
  }

}
