import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-show-books-footer-loading',
  templateUrl: './footer-loading.component.html',
  styleUrls: ['./footer-loading.component.scss']
})
export class FooterLoadingComponent implements OnInit {

  @Input() isLoading: boolean;

  constructor() { }

  ngOnInit() {
  }

}
