import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: any = []

  team = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    position: new FormControl(''),
    weight: new FormControl(''),
    height: new FormControl(''),
    nationality: new FormControl(''),
    leftFooted: new FormControl('')
  })

  get name() {
    return this.team.get('name')
  }

  addPlayerToTheTeam() {
    this.players.push(this.team.value)
  }

  constructor() { }

  ngOnInit(): void {
  }


}
