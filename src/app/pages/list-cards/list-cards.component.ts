import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../core/models/api-response.model';
import { Card } from '../../modules/card/models/card.model';
import { CallApiService } from '../../core/services/call-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-cards',
  standalone: true,
  imports: [CommonModule],
  providers: [CallApiService],
  templateUrl: './list-cards.component.html',
  styleUrl: './list-cards.component.scss'
})
export class ListCardsComponent implements OnInit {

  
  // Objeto genérico para armazenar os dados
  public data?: Observable<ApiResponse<Card>>;

  // URL do endpoint que você deseja chamar
  //private apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
  //private apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?cardset=metal%20raiders&attribute=dark';
  private apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?race=Machine';

  constructor(private callApiService: CallApiService) {
    
  }
  ngOnInit(): void {
    
    // Atribuindo o Observable diretamente à variável `data`
    this.data = this.callApiService.get<ApiResponse<Card>>(this.apiUrl)

  }


}