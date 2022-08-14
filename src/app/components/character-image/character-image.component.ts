import { Component, Input, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'dnd-character-image',
  templateUrl: './character-image.component.html',
  styleUrls: ['./character-image.component.scss'],
})
export class CharacterImageComponent {
  public constructor() {
  }

  @Input() public path?: string;

  public ngOnChanges(changes: SimpleChanges) {
    if(changes['path']) {
    }
  }
}
