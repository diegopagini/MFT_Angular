import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent implements OnInit {

  display: boolean = false;

  showDialog() {
    this.display = true;
  }

  players: Array<any> = [];
  positions = [1 ,2 ,3 ,4, 5, 6, 7, 8, 9, 10, 11];
  foot = ['left-footed', 'rigth-footed']

  team = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    position: new FormControl(''),
    // position: new FormGroup({
    //   1: new FormControl(1),
    //   2: new FormControl(2),
    //   3: new FormControl(3),
    // }),
    weight: new FormControl('', [Validators.required]),
    height: new FormControl('', [Validators.required]),
    nationality: new FormControl('', [Validators.required]),
    leftFooted: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {
    this.team.controls.name.valueChanges.subscribe(selectedValue => {
      this.filterCharacter()
      console.log(selectedValue)
    })
  }

  get nameField() {
    return this.team.get('name');
  }

  get lastNameField() {
    return this.team.get('lastName');
  }

  get positionField() {
    return this.team.get('position');
  }

  get weightField() {
    return this.team.get('weight');
  }

  get heightField() {
    return this.team.get('height');
  }

  get nationalityField() {
    return this.team.get('nationality');
  }

  get leftFootedField() {
    return this.team.get('leftFooted');
  }

  addPlayerToTheTeam() {
    if (this.team.valid) {
      this.players.push(this.team.value);
      console.log(this.team.value);
    }
    this.team.reset()
  }

  filterCharacter() {
    this.players.filter(el => {
      if (el.name == 'diego') {
        document.getElementById('one').style.backgroundColor = "red"
      }
    })
  }

}
