import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-customArtFormized-art',
  templateUrl: './customized-art.component.html',
  styleUrls: ['./customized-art.component.css']
})
export class CustomizedArtComponent implements OnInit {

  customArtForm: FormGroup;
  showSelectDate = false;

  instruction:FormControl
  referenceArt:FormControl
  preferredArtistName: FormControl
  framing: FormControl
  deliveryDeadline: FormControl
  deliveryDeadlineDate: FormControl

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {

    this.instruction = this.formBuilder.control('', Validators.required)
    this.referenceArt = this.formBuilder.control('')
    this.preferredArtistName = this.formBuilder.control('')
    this.framing = this.formBuilder.control('No Framing')
    this.deliveryDeadline = this.formBuilder.control('no')
    this.deliveryDeadlineDate = this.formBuilder.control('');

    this.customArtForm = this.formBuilder.group({
      instruction: this.instruction,
      referenceArt:this.referenceArt,
      preferredArtistName: this.preferredArtistName,
      framing: this.framing,
      deliveryDeadline: this.deliveryDeadline,
      deliveryDeadlineDate: this.deliveryDeadlineDate
    });

    this.deliveryDeadline.valueChanges.subscribe((value) => {
      if (value === 'yes') {
        this.showSelectDate = true
      } else if (value === 'no') {
        this.showSelectDate = false
      }
    });
  }

  onSubmit() {
    console.log(this.customArtForm.value);
  }

}
