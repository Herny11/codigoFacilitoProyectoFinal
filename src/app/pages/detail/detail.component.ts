import { Component } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/services/card.service';
import { Observable } from 'rxjs';
import { Cards } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  id!: string;
  card$!: Observable<Cards>;
  constructor(private route: ActivatedRoute, private cardService: CardService){

  }
  ngOnInit(): void{
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.card$= this.cardService.getCard(this.id);
  }

}
