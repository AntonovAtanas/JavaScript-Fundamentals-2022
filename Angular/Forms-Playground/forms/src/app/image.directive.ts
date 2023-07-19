import {
  Directive,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NgForm, FormControl, FormGroup } from '@angular/forms';

@Directive({
  selector: '[appImage]',
})
export class ImageDirective implements OnChanges {
  @Input() appImage!: any

  currentValue: string = '';

  constructor(private el: Renderer2, private ngForm: NgForm) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.currentValue = changes['appImage'].currentValue.value;
    console.log(changes, `changes`)
    console.log(this.currentValue, `appImage`);

    if (!this.currentValue.match(/^https.*\.(jpg|png)$/gm)) {
      console.log('dont match')
    } else {
      console.log(' match')

    }
  }
}
