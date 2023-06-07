import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public cards: any[] = [
    {
      index: 1,
      title: 'Javascript',
      title2:'typescript.',
      description:'JavaScript is the.',
      currency: 100,
      img: 'https://as1.ftcdn.net/v2/jpg/02/76/34/78/1000_F_276347873_5TfEtP8UX5jQiks1a2o3SFfvxZgRdnPY.jpg',
      
    },
    {
      index: 2,
      title: 'Html',
      title2: 'Css',
      description:'Html is the worlds .',
      currency: 200,
      img: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220630132824/HTML-Full-Form.jpg',
    },
    {
      index: 3,
      title: 'Css',
      title2: 'Html',
      description:'Css is the.',
      currency: 300,
      img: 'https://miro.medium.com/max/600/1*OFsc0SD55jhi8cjo7aCA4w.jpeg',
    },
    {
      index: 4,
      title: 'Angular',
      title2: 'React',
      description:'Angular is the.',
      currency: 400,
      img: 'https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular-1520x800.png',
    },
  ];

  public cardFilter: any[] = [];

  constructor() {
    console.log('ansari');
    
  }


  ngOnInit() {
    console.log('ngOnInIt');
    
    this.cardFilter = this.cards;
  }

  changeCardTitle(i: number) {
    this.cards[i].title = this.cards[i].title2;
  }

  addCard() {
    this.cards.push(this.cards.length + 1);
  }

  remove(index: number) {
    this.cards.splice(index, 1);
  }

  reset() {}
  
  searchText(text: string) {
    this.cardFilter = this.cards.filter((card) =>
      card.title.toLowerCase().includes(text.toLowerCase())
      // card.title === text
      // card.title.includes(text)
    );
  }

  ngOnDestroy(){
    console.log('destroy');
    
  }
}
