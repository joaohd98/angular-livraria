import { Component, OnInit } from '@angular/core';
import {MasterComponent} from '../../../../helpers/master/master-component';
import {faEdit, faTrash, IconDefinition} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-show-books-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent extends MasterComponent implements OnInit {

  list: {name: string, isCollapsed: boolean}[];
  iconEdit: IconDefinition;
  iconDelete: IconDefinition;

  constructor() {
    super();

    this.list = [
      {name: 'aaa', isCollapsed: true },
      {name: 'bbb', isCollapsed: true },
      {name: 'ccc', isCollapsed: true },
    ];

    this.iconDelete = faTrash;
    this.iconEdit = faEdit;

  }


  ngOnInit() {
  }

}
