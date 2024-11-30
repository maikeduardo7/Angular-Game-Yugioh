import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Card } from '../../modules/card/models/card.model';
import { ApiService } from '../../core/services/api.service';
import { ApiResponse } from '../../core/models/api-response.model';
import { Observable } from 'rxjs';
import { group } from '@angular/animations';

@Component({
  selector: 'app-duel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './duel.component.html',
  styleUrl: './duel.component.scss'
})
export class DuelComponent {

// Adicionando mais uma célula a mais na parte superior e inferior
upperCellsMonsters = Array(5).fill(null);  // 5 células na parte superior
upperCellsMagics = Array(5).fill(null);  // 5 células na parte superior
lowerCellsMonsters = Array(5).fill(null);  // 5 células na parte inferior
lowerCellsMagics = Array(5).fill(null);  // 5 células na parte inferior
handCards = Array(5).fill(null);  // 5 células na parte inferior

 // Variáveis de controle do modal
  isModalOpen = false;
  selectedCard: string = '';

  // Função para abrir o modal e exibir a imagem do card
  openModal(card: string) {
    this.selectedCard = card; // Armazena o link da imagem do card
    this.isModalOpen = true;   // Abre o modal
  }

  // Função para fechar o modal
  closeModal() {
    this.isModalOpen = false; // Fecha o modal
  }

// constructor(private callApiService: CallApiService) {}
constructor(private ApiService: ApiService) {

  this.ApiService.CardsObs.subscribe(cards => {
    
    const fiveCardsUpper = this.getRandomCards(5, cards);
    // Preenche apenas as 5 primeiras células, mantendo a última célula vazia
    this.upperCellsMonsters = [...this.upperCellsMonsters];  // Cria uma nova referência do array para garantir a reatividade
    for (let i = 0; i < 5; i++) {
      this.upperCellsMonsters[i] = fiveCardsUpper[i].card_images[0].image_url_small;  // Preenche com a imagem
    }

    const fiveCardsLower = this.getRandomCards(5, cards);
     // Preenche apenas as 5 primeiras células, mantendo a última célula vazia
     this.lowerCellsMonsters = [...this.lowerCellsMonsters];  // Cria uma nova referência do array para garantir a reatividade
     for (let i = 0; i < 5; i++) {
       this.lowerCellsMonsters[i] = fiveCardsLower[i].card_images[0].image_url_small;  // Preenche com a imagem
     }

    // Preenche apenas as 5 primeiras células, mantendo a última célula vazia
    this.upperCellsMagics = [...this.upperCellsMagics];  // Cria uma nova referência do array para garantir a reatividade
    for (let i = 0; i < 5; i++) {
      this.upperCellsMagics[i] = fiveCardsUpper[i].card_images[0].image_url_small;  // Preenche com a imagem
    }

     // Preenche apenas as 5 primeiras células, mantendo a última célula vazia
     this.lowerCellsMagics = [...this.lowerCellsMagics];  // Cria uma nova referência do array para garantir a reatividade
     for (let i = 0; i < 5; i++) {
       this.lowerCellsMagics[i] = fiveCardsLower[i].card_images[0].image_url_small;  // Preenche com a imagem
     }


     const fiveHandCards = this.getRandomCards(5, cards);
     this.handCards = [...this.handCards];
     for (let i = 0; i < 5; i++){
      this.handCards[i] = fiveHandCards[i].card_images[0].image_url_small;
     }
     
  })
  this.ApiService.getCards('https://db.ygoprodeck.com/api/v7/cardinfo.php?race=Machine');
}
// ngOnInit(): void {

//   var data: Observable<ApiResponse<Card>>;
//   var randomCards: Card[] = [];  // Lista de 5 cartas aleatórias

//   var apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?race=Machine';

  
//   this.callApiService.get<ApiResponse<Card>>(apiUrl).subscribe((response) => {
    
//     const fiveCardsLower = this.getRandomCards(5, response.data);
//      // Preenche apenas as 5 primeiras células, mantendo a última célula vazia
//      this.lowerCells = [...this.lowerCells];  // Cria uma nova referência do array para garantir a reatividade
//      for (let i = 0; i < 5; i++) {
//        this.lowerCells[i] = fiveCardsLower[i].card_images[0].image_url_small;  // Preenche com a imagem
//      }

//      const fiveCardsUpper = this.getRandomCards(5, response.data);
//      // Preenche apenas as 5 primeiras células, mantendo a última célula vazia
//      this.upperCells = [...this.upperCells];  // Cria uma nova referência do array para garantir a reatividade
//      for (let i = 0; i < 5; i++) {
//        this.upperCells[i] = fiveCardsUpper[i].card_images[0].image_url_small;  // Preenche com a imagem
//      }
     
//   });
  
  // data = this.callApiService.get<ApiResponse<Card>>(apiUrl)
  // var fiveCards = this.getRandomCards(5, data);
  // console.log(fiveCards);
  // this.lowerCells = fiveCards.map(card => card.card_images[0].image_url_small);



// }

// Método para pegar 5 cartas aleatórias
getRandomCards(count: number, data: Card[]): Card[] {
  // Embaralha o array de cartas
  const shuffled = [...data].sort(() => 0.5 - Math.random());  // Cria uma cópia do array e embaralha
  return shuffled.slice(0, count);  // Retorna as 'count' primeiras cartas após o embaralhamento
}


}
