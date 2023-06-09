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
    {
      index: 5,
      title: 'GitHub',
      title2: 'React',
      description:'All Developers Use.',
      currency: 2000,
      img: 'https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png',
    },
    {
      index: 6,
      title: 'Git',
      title2: 'React',
      description:'All Developers Use.',
      currency: 2000,
      img: 'https://camo.githubusercontent.com/6eaaae8defc78f268eaf0824350a66a1dfcb6aa77210d3dca069d1d1cefebc53/68747470733a2f2f6769742d73636d2e636f6d2f696d616765732f6c6f676f732f646f776e6c6f6164732f4769742d4c6f676f2d32436f6c6f722e706e67',
    },
    {
      index: 7,
      title: 'Git Bucket',
      title2: 'React',
      description:'All Developers Use.',
      currency: 2000,
      img: 'https://opengraph.githubassets.com/9e130087285f9e4f9a9c9e8dd9085bfb437017027025f71f8b63ecc340f8517a/gitbucket/gitbucket',
    },
    {
      index: 8,
      title: 'Bootstrap',
      title2: 'React',
      description:'All Developers Use.',
      currency: 2000,
      img: 'https://www.bootstrapdash.com/wp-content/uploads/2017/08/bootstrap-4-beta-whats-new.jpg',
    },
    {
      index: 9,
      title: 'Linked in',
      title2: 'in',
      description:'All Developers Use.',
      currency: 2000,
      img: 'https://blog.linkedin.com/apps/settings/wcm/designs/linkedin/katy/global/clientlibs/resources/img/default-share.png',
    },
    {
      index: 10,
      title: 'twiter',
      title2: 'tweet',
      description:'All Developers Use.',
      currency: 2000,
      img: 'https://www.shutterstock.com/image-photo/kiev-ukraine-may-08-2015-260nw-281364161.jpg',
    },
    {
      index: 11,
      title: 'instagram',
      title2: 'insta',
      description:'All Developers Use.',
      currency: 2000,
      img: 'https://www.91-cdn.com/hub/wp-content/uploads/2022/05/Instagram-logo-1200x900.jpg',
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
