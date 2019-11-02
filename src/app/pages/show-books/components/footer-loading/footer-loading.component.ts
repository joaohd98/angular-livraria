import {Component, Input, OnInit} from '@angular/core';
import {MasterComponent} from '../../../../helpers/master/master-component';
import {showBooksComponentConst} from '../../providers/show-books.component.constants';

@Component({
  selector: 'app-show-books-footer-loading',
  templateUrl: './footer-loading.component.html',
  styleUrls: ['./footer-loading.component.scss']
})
export class FooterLoadingComponent extends MasterComponent implements OnInit {

  constants = showBooksComponentConst.footerLoading;

  ngOnInit() {



  }

}
