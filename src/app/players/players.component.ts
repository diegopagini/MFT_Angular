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

  team = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    position: new FormControl('', [Validators.required]),
    weight: new FormControl('', [Validators.required]),
    height: new FormControl('', [Validators.required]),
    nationality: new FormControl('', [Validators.required]),
    leftFooted: new FormControl('', [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {

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
      console.log(this.players);
    }
    this.team.reset()
  }

}
