import {
  Component,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import {
  StackLayout
} from 'ui/layouts/stack-layout';
import {
  GestureTypes,
  TouchGestureEventData
} from 'ui/gestures';

@Component({
  selector:'menu-item',
  styleUrls:['MenuItem/menuitem.css'],
  template:`
    <StackLayout orientation="horizontal" (tap)="onTouch($event)" #stacklayout class="menu-item">
        <Label [text]="name"  ></Label>
    </StackLayout>
    <StackLayout *ngIf="border" class="border-bottom"></StackLayout>
  `
})
export class MenuItem  implements AfterViewInit{
  @Input('name') name: string;
  @Input('border') border: boolean;

  @ViewChild('stacklayout') stackLayoutRef;
  private stackLayoutEle: StackLayout;

  onTouch(event) {
    alert('touch');
  }

  ngAfterViewInit() {
    console.log(this.name);
    this.stackLayoutEle = this.stackLayoutRef.nativeElement;
    // this.stackLayoutEle.on(GestureTypes.tap,()=>{
    //   console.log('tap');
    //   alert('tap')
    // });
  }

}