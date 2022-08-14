import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'dnd-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.scss'],
})
export class CharacterFormComponent {
  constructor(private fb: FormBuilder) { }

  @Output() public save = new EventEmitter();

  public characterImageFormSuccess: boolean = false;
  public characterPersonalInfoFormSuccess: boolean = false;

  public genders = ['female', 'male'];
  public races = ['elf', 'human'];
  public classes = ['archer', 'fighter', 'mage'];
  public charGender: string = 'female';
  public charRace: string = 'human';
  public charClass: string = 'fighter';
  public path: string = 'assets/img/' + this.charGender + '-' + this.charRace + '-' + this.charClass + '.png';

  public characterImageForm = this.fb.group({
    gender: [this.genders, Validators.required],
    race: [this.races, Validators.required],
    class: [this.classes, Validators.required],
  });

  public onGenderSelected(value: string) {
    this.charGender = value;
    this.path = 'assets/img/' + this.charGender + '-' + this.charRace + '-' + this.charClass + '.png';
  }

  public onRaceSelected(value: string) {
    this.charRace = value;
    this.path = 'assets/img/' + this.charGender + '-' + this.charRace + '-' + this.charClass + '.png';
  }

  public onClassSelected(value: string) {
    this.charClass = value;
    this.path = 'assets/img/' + this.charGender + '-' + this.charRace + '-' + this.charClass + '.png';
  }

  public onCharacterImageSubmit(): void {
    //if valid
    {
      this.save.emit(this.characterImageForm.value);
      this.characterImageFormSuccess = true;
    }
  }

  public characterPersonalInfoForm = this.fb.group({
    name: [Validators.required],
    surname: [Validators.required],
    age: [Validators.required],
  })


  public onCharacterPersonalInfoSubmit(): void {
    //if valid
    {
      this.save.emit(this.characterImageForm.value);
      this.characterPersonalInfoFormSuccess = true;
    }
  }
}
