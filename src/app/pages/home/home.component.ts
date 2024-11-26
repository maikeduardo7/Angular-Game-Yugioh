import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CallApiService } from '../../core/services/call-api.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Card } from '../../modules/card/models/card.model';
import { ApiResponse } from '../../core/models/api-response.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{

}
