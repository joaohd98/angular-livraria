import {Component, HostListener, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MasterComponent} from '../../../../helpers/master/master-component';
import {showBooksComponentConst} from '../../providers/show-books.component.constants';
import {ShowBooksComponentInteractor} from '../../providers/show-books.component.interactor';

@Component({
  selector: 'app-show-books-footer-loading',
  templateUrl: './footer-loading.component.html',
  styleUrls: ['./footer-loading.component.scss']
})
export class FooterLoadingComponent extends MasterComponent implements OnChanges {

  @Input() interactor: ShowBooksComponentInteractor;
  @Input() hasNext: boolean;
  @Input() hasNextButton: boolean;
  hasReachBottom: boolean;

  constants = showBooksComponentConst.footerLoading;

  ngOnChanges(changes: SimpleChanges): void {

    console.log(changes);

  }

  @HostListener('window:scroll', [])
  onScroll() {

    // Has reach bottom
    if (!this.hasNextButton) {

      if ((!this.hasReachBottom && window.innerHeight + window.scrollY) >= document.body.offsetHeight) {

        this.hasReachBottom = true;

      }

    }

  }

}
