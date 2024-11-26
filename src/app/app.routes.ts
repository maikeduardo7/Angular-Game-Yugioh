import { Routes } from '@angular/router';
import { DuelComponent } from './pages/duel/duel.component';
import { HomeComponent } from './pages/home/home.component';
import { ListCardsComponent } from './pages/list-cards/list-cards.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },  
    { path: 'duel', component: DuelComponent },  // Adiciona a rota para Duel
    { path: 'list', component: ListCardsComponent },  
    { path: '', redirectTo: '/home', pathMatch: 'full' },  // Rota inicial (pode ser a Home ou outra página)
    // Outras rotas aqui...
];
