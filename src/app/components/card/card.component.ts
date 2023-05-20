import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Cards } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card!: Cards;

  constructor(private router: Router){

  }
  ngOnInit(): void{

  }
  goToCard(){
    this.router.navigate([`./card/${this.card.id}`]);
  }

}
