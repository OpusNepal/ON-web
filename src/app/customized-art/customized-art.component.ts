import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { UserService } from '../auth/user.service';
import { CustomArt } from '../app-models/custom-art';
import { LocalStorageService } from '../auth/local-storage.service';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap"
import { Router } from '@angular/router';
import { NotificationService } from "../lib/notification/notification.service";




@Component({
  selector: 'app-customArtFormized-art',
  templateUrl: './customized-art.component.html',
  styleUrls: ['./customized-art.component.css']
})
export class CustomizedArtComponent implements OnInit {

  @ViewChild('content')
  private content;

  customArtForm: FormGroup;
  showSelectDate = false;

  description:FormControl
  image:FormControl
  preferredArtistName: FormControl
  framing: FormControl
  // deliveryDeadline: FormControl
  // deliveryDeadlineDate: FormControl
  address_line_1: FormControl
  address_line_2: FormControl
  country: FormControl
  city: FormControl
  province: FormControl
  postal_code: FormControl
  alt_phone: FormControl
  alt_address: FormControl

  artists = [];
  artistsList = [];

  artistId: Number

  refImage: File

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.artists.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  constructor(private ns:NotificationService,public router: Router,private formBuilder: FormBuilder, private userService: UserService, private localStorageService: LocalStorageService, private modalService: NgbModal) { }

  ngOnInit() {
    this.createForm();
    this.userService.getNamesOfVerifiedArtist().subscribe((res) => {
      this.artistsList = res;
      this.artists = this.artistsList.map((artist) => {
        return artist.fullName
      });
    });
  }

  private createForm(): void {

    this.description = this.formBuilder.control('', Validators.required)
    this.image = this.formBuilder.control('', Validators.required)
    this.preferredArtistName = this.formBuilder.control('')
    this.framing = this.formBuilder.control('No Framing')
    // this.deliveryDeadline = this.formBuilder.control('no')
    // this.deliveryDeadlineDate = this.formBuilder.control('')
    this.address_line_1 = this.formBuilder.control('', Validators.required)
    this.address_line_2 = this.formBuilder.control('')
    this.country = this.formBuilder.control('', Validators.required)
    this.city = this.formBuilder.control('')
    this.province = this.formBuilder.control('')
    this.postal_code = this.formBuilder.control('')
    this.alt_phone = this.formBuilder.control('')
    this.alt_address = this.formBuilder.control('')
  


    this.customArtForm = this.formBuilder.group({
      description: this.description,
      image:this.image,
      preferredArtistName: this.preferredArtistName,
      framing: this.framing,
      address_line_1: this.address_line_1,
      address_line_2: this.address_line_2,
      country: this.country,
      province: this.province,
      postal_code: this.postal_code,
      alt_phone: this.alt_phone,
      alt_address: this.alt_address,
      city: this.city
      // deliveryDeadline: this.deliveryDeadline,
      // deliveryDeadlineDate: this.deliveryDeadlineDate
    });

    // this.deliveryDeadline.valueChanges.subscribe((value) => {
    //   if (value === 'yes') {
    //     this.showSelectDate = true
    //   } else if (value === 'no') {
    //     this.showSelectDate = false
    //   }
    // });
  }

  onSubmit() {
    const {preferredArtistName} = this.customArtForm.value

    const artist = this.artistsList.find(item => preferredArtistName === item.fullName)
    if (artist) {
      this.artistId = artist.id
    } else {
      this.artistId = null
    }
    
    const { userId } = this.localStorageService.getAuthData()

    delete this.customArtForm.value["preferredArtistName"]
    const data: CustomArt = {
      ... this.customArtForm.value,
      artistId: this.artistId,
      buyerId: userId
    }


    const formData = new FormData()
    formData.append('address_line_1', data.address_line_1);
    formData.append('address_line_2', data.address_line_2);
    formData.append('alt_address', data.alt_address);
    if (this.artistId) {
      formData.append('artistId', String(this.artistId));

    }
    formData.append('buyerId', userId);
    formData.append('city', data.city);
    formData.append('country', data.country);
    formData.append('description', data.description);
    formData.append('framing', data.framing);
    formData.append('image', this.refImage);
    formData.append('postal_code', data.postal_code.toString())
    formData.append('alt_phone', data.alt_phone)
    formData.append('province', data.province)

    this.userService.requestCustomArt(formData).subscribe(() => {
      this.router.navigate(['home']);
      this.ns.success("Your order has been placed");

      // this.open(this.content)
    });

    
  }

  onProductSelect(event){
    this.refImage = event.target.files[0];
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title'})
  }

}
