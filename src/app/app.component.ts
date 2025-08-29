import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items = [
    new WishItem('Learn Angular'),
    new WishItem('Have coffee', true),
    new WishItem('Find grass that mows itself')
  ];

  showDirections:boolean = true;
  directions:string = 'Please check wishes off list as they become fulfilled';
}
