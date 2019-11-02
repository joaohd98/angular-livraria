import {Component, Input, OnInit} from '@angular/core';
import {MasterComponent} from '../../../../helpers/master/master-component';
import {showBooksComponentConst} from '../../providers/show-books.component.constants';
import {ShowBooksComponentInteractor} from '../../providers/show-books.component.interactor';

@Component({
  selector: 'app-show-books-footer-loading',
  templateUrl: './footer-loading.component.html',
  styleUrls: ['./footer-loading.component.scss']
})
export class FooterLoadingComponent extends MasterComponent implements OnInit {

  @Input() interactor: ShowBooksComponentInteractor;
  @Input() hasNext: boolean;
  @Input() hasNextButton: boolean;
  hasReachBottom: boolean;

  constants = showBooksComponentConst.footerLoading;

  ngOnInit() {

  }

  getMoreBooks() {

    this.interactor.getMoreBooks();

  }

}
