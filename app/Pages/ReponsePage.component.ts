import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector:'response-page',
  template:`
    <ActionBar title="回复"></ActionBar>
    <DockLayout stretchLastChild="true">
      <StackLayout orientation="vertical" dock="bottom" class="input-section">
        <Label class="border"></Label>
        <TextView class="reponse-input" (text)="response" hint="这里回复"></TextView>
      </StackLayout>
      <StackLayout dock="top">
        <Label text="Hello World"></Label>
      </StackLayout>
    </DockLayout>
  `,
})
export class ResponsePage {
  private response:string;
  constructor() {
  }

}