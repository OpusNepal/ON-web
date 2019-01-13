import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../auth/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

profileForm: FormGroup;
  constructor(public formBuilder: FormBuilder, public userService: UserService, public router: Router) { }

  ngOnInit() {
  }

  private createForm(): void {
    this.profileForm = this.formBuilder.group({
      streetName: ['', [Validators.required]],
      expert:     ['', [Validators.required]],
      role:       ['', [Validators.required]],
      bio:        ['', [Validators.required]],
      cv:         ['', Validators.required],
      profilePic: ['', Validators.required],
      sampleArt:  ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.profileForm.value);
    this.userService.updateProfile(this.profileForm.value).subscribe((res) => {
      console.log(res);
      this.router.navigate(['home']);
    }, (err) => {
      console.log(err);
    });
  }

}
