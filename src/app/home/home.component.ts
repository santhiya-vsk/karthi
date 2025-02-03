import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  category=[
    {
      title:'women clothing',
      Image:'women.webp'
    },
    {
      title:'men clothing',
      Image:'men.webp'
    },
    {
      title:'kids clothing',
      Image:'3.webp'
    },
    {
      title:'Footwear',
      Image:'4.webp'
    },
    {
      title:'Beauty Wellness and More',
      Image:'5.webp'
    },
    {
      title:'Accessoriess and More',
      Image:'6.webp'
    },
    {
      title:'Home Decor',
      Image:'7.webp'
    },
    {
      title:'Home furnishing',
      Image:'8.webp'
    },
    {
      title:'Kitchen and Home Appliances',
      Image:'9.webp'
    }
  
]
banner=[
  {
    Image1:'ban1.jpg',
     Image2:'ban2.jpg',
    Image3:'ban3.jpg'
  }
]
}
