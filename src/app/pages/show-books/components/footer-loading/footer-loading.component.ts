import {Component, HostListener, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MasterComponent} from '../../../../helpers/master/master-component';
import {showBooksComponentConst} from '../../providers/show-books.component.constants';
import {ShowBooksComponentInteractor} from '../../providers/show-books.component.interactor';
import {BookResponseModel} from '../../../../models/book/book-response-model';

@Component({
  selector: 'app-show-books-footer-loading',
  templateUrl: './footer-loading.component.html',
  styleUrls: ['./footer-loading.component.scss']
})
export class FooterLoadingComponent extends MasterComponent implements OnChanges {

  @Input() interactor: ShowBooksComponentInteractor;
  @Input() hasNext: boolean;
  @Input() hasNextButton: boolean;
  @Input() books: BookResponseModel[];
  hasReachBottom: boolean;


  constants = showBooksComponentConst.footerLoading;

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.books) {
      console.log(changes.books);
      this.hasReachBottom = false;
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {

    // Has reach bottom
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {

      if (this.interactor.getPaginationIndex() >= 2 && this.hasNext && !this.hasNextButton && !this.hasReachBottom )
        this.getMoreBook();

    }

  }

  getMoreBook() {

    this.hasReachBottom = true;
    this.interactor.getMoreBooks();

  }

}
