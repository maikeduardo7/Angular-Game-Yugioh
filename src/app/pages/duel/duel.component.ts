import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Card } from '../../modules/card/models/card.model';
import { CallApiService } from '../../core/services/call-api.service';
import { ApiResponse } from '../../core/models/api-response.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-duel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './duel.component.html',
  styleUrl: './duel.component.scss'
})
export class DuelComponent implements OnInit {

// Adicionando mais uma célula a mais na parte superior e inferior
upperCells = Array(6).fill(null);  // 5 células na parte superior
lowerCells = Array(6).fill(null);  // 5 células na parte inferior

constructor(private callApiService: CallApiService) {}

ngOnInit(): void {

  var data: Observable<ApiResponse<Card>>;
  var andomCards: Card[] = [];  // Lista de 5 cartas aleatórias

  var apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?race=Machine';

  
  this.callApiService.get<ApiResponse<Card>>(apiUrl).subscribe((response) => {
    
    const fiveCardsLower = this.getRandomCards(5, response.data);
     // Preenche apenas as 5 primeiras células, mantendo a última célula vazia
     this.lowerCells = [...this.lowerCells];  // Cria uma nova referência do array para garantir a reatividade
     for (let i = 0; i < 5; i++) {
       this.lowerCells[i] = fiveCardsLower[i].card_images[0].image_url_small;  // Preenche com a imagem
     }

     const fiveCardsUpper = this.getRandomCards(5, response.data);
     // Preenche apenas as 5 primeiras células, mantendo a última célula vazia
     this.upperCells = [...this.upperCells];  // Cria uma nova referência do array para garantir a reatividade
     for (let i = 0; i < 5; i++) {
       this.upperCells[i] = fiveCardsUpper[i].card_images[0].image_url_small;  // Preenche com a imagem
     }
     
  });
  
  // data = this.callApiService.get<ApiResponse<Card>>(apiUrl)
  // var fiveCards = this.getRandomCards(5, data);
  // console.log(fiveCards);
  // this.lowerCells = fiveCards.map(card => card.card_images[0].image_url_small);



}

// Método para pegar 5 cartas aleatórias
getRandomCards(count: number, data: Card[]): Card[] {
  // Embaralha o array de cartas
  const shuffled = [...data].sort(() => 0.5 - Math.random());  // Cria uma cópia do array e embaralha
  return shuffled.slice(0, count);  // Retorna as 'count' primeiras cartas após o embaralhamento
}


}
