import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector:'list-item',
  template:`
     <StackLayout orientation="vertical" class="list-item">
        <StackLayout orientation="horizontal" class="list-content">
          <Image class="list-avatar" [src]="item.author.avatar_url"></Image>
          <StackLayout orientation="vertical">
            <Label [text]="item.title"></Label>
          </StackLayout>
        </StackLayout>
        <Label class="border-bottom"></Label>
      </StackLayout>
  `,
})
export class ListItem {
 @Input('item') item: any;
}