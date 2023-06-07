import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public headingChanged = 'Dev-Lopers';
  @Input('showMenu') showMenu: boolean = true;
  @Input('searchBar') showSearchBar: boolean = true;
  @Input('head') show: boolean = true;
  @Output('searchAlerts') searchAlert = new EventEmitter<any>();

  constructor() {}
}
