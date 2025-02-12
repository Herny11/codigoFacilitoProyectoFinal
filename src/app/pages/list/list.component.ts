import { Component } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Cards } from 'src/app/interfaces/card.interface';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  cards: Cards[] = [];
  offset = 0;
  cambio: any;

  cardTextFC = new FormControl('');
  constructor(private cardService: CardService){

  }
  ngOnInit(): void{

    this.cambio = this.cardTextFC.valueChanges.pipe(
      debounceTime(1000)
    )
    .subscribe((res=>{
      this.cards = [];
      this.searchCards(res);
    }));
    this.searchCards();
  }
  onScroll(){
      this.offset += 50;
      this.searchCards();


  }
  searchCards(cardName: string | null = null){
    this.cardService.getCards(cardName, this.offset).subscribe(res=>{
      this.cards = [...this.cards, ...res];
    })
  }
}
