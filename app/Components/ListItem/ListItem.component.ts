import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {
  TNSFontIconPipe
} from 'nativescript-ng2-fonticon';

@Component({
  selector:'items',
  template:`
    <RadListView [items]="items" row="1" class="scrollview-content" (itemTap)="onItemTap($event)">
        <template listItemTemplate let-item="item" let-i="index">
        <StackLayout orientation="vertical" class="list-item">
            <StackLayout orientation="horizontal" class="list-content ">
            <!--头像-->
            <Image class="list-avatar" [src]="item.author.avatar_url"></Image>
            <!--用户名 创建时间-->
            <StackLayout orientation="vertical">
                <Label [text]="item.author.loginname" class="font15"></Label>
                <Label [text]="item.create_at" class="font10"></Label>
            </StackLayout>
            </StackLayout>
            <!--title-->
            <StackLayout orientation="vertical" class="list-title font15">
                <Label [text]="item.title" textWrap="true"></Label>
            </StackLayout>
            <!--meta信息-->
            <GridLayout rows="auto" columns="1*,1*,1*" class="meta-section">
            <!--收藏-->
            <StackLayout row="0" col="0" class="meta-tag" orientation="vertical">
                <StackLayout orientation="horizontal" class="meta-tag-item font12">
                <Label class="font-awesome" text="{{'fa-heart' | fonticon}}"></Label>
                <Label text="收藏"></Label>
                </StackLayout>
            </StackLayout>
            <!--浏览-->
            <StackLayout row="0" col="1" class="meta-tag" orientation="vertical">
                <StackLayout orientation="horizontal" class="meta-tag-item font12">
                <Label class="font-awesome" text="{{'fa-eye' | fonticon}}"></Label>
                <Label text="浏览"></Label>
                </StackLayout>
            </StackLayout>
            <!--评论-->
            <StackLayout row="0" col="2" class="meta-tag" orientation="vertical">
                <StackLayout orientation="horizontal" class="meta-tag-item font12">
                <Label class="font-awesome" text="{{'fa-comment' | fonticon}}"></Label>
                <Label text="评论"></Label>
                </StackLayout>
            </StackLayout>
            </GridLayout>
            <Label class="border-bottom"></Label>
        </StackLayout>
        </template>
    </RadListView>
  `,
  pipes:[TNSFontIconPipe],

})
export class ListItem implements OnInit{
 @Input('items') items:Array<any>;
 @Input('onItemTap') onItemTap:Function;
 ngOnInit() {
   console.log('-----------list item init------------');
 }
}