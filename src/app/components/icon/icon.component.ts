import {Component, Input, OnInit} from '@angular/core';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() iconName: IconDefinition;

  ngOnInit() {
  }

}
