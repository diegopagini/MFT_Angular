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
  positions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  foot = ['left-footed', 'rigth-footed'];

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

  ngOnInit(): void {}

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

  onClick() {
    this.addPlayerToTheTeam();
    this.filterCharacter();
  }

  addPlayerToTheTeam() {
    if (this.team.valid) {
      this.players.push(this.team.value);
    }
    this.team.reset();
  }

  filterCharacter() {
    this.players.filter((el) => {
      if (el.position === 1) {
        document.getElementById('one').style.backgroundColor = 'red';
      } else if (el.position === 2) {
        document.getElementById('two').style.backgroundColor = 'red';
      } else if (el.position === 3) {
        document.getElementById('three').style.backgroundColor = 'red';
      } else if (el.position === 4) {
        document.getElementById('four').style.backgroundColor = 'red';
      } else if (el.position === 5) {
        document.getElementById('five').style.backgroundColor = 'red';
      } else if (el.position === 6) {
        document.getElementById('six').style.backgroundColor = 'red';
      } else if (el.position === 7) {
        document.getElementById('seven').style.backgroundColor = 'red';
      } else if (el.position === 8) {
        document.getElementById('eight').style.backgroundColor = 'red';
      } else if (el.position === 9) {
        document.getElementById('nine').style.backgroundColor = 'red';
      } else if (el.position === 10) {
        document.getElementById('ten').style.backgroundColor = 'red';
      } else if (el.position === 11) {
        document.getElementById('eleven').style.backgroundColor = 'red';
      }
    });
  }
}
