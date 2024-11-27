import { Injectable, Type } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Card } from '../../modules/card/models/card.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CallApiService {
  private Cards: Card[] = [];
  private readonly CardsObs$: Subject<Card[]> = new Subject();
  public readonly CardsObs = this.CardsObs$.asObservable();

constructor(private httpClient: HttpClient){
  // this.getCards('https://db.ygoprodeck.com/api/v7/cardinfo.php?race=Machine');
}

  // Método GET genérico
  getData(url: string): Observable<any> {
    return new Observable((observer) => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => observer.next(data))
        .catch(error => observer.error(error))
        .finally(() => observer.complete());
    });
  }

  async getCards(endpoint: string, params?: URLSearchParams){

    const url = params ? `${endpoint}?${params.toString()}` : endpoint;
    try{
      const response = await fetch(url);

      if(response.ok){
        const json = await response.json()
        this.Cards = json.data;
        this.CardsObs$.next(this.Cards);
      }

    } catch (error) {
      this.CardsObs$.error(error)
    }
  }

  /**
   * Função para fazer chamadas GET genéricas para a API
   * @param endpoint: URL da API (pode ser relativa à baseUrl)
   * @param params: parâmetros adicionais para a requisição
   */
  // async get<T>(endpoint: string, params?: URLSearchParams){
  
  //   return new Promise<T>( async (resolve, reject) => {
  //     const url = params ? `${endpoint}?${params.toString()}` : endpoint;
  //     const response = await  fetch(url);
  //     if (!response.ok) {
  //       reject(new Error('Network response was not ok'));
  //     }
  //     const data: T = await response.json();
  //     resolve(data);
  //   });
  // }

  get<T>(endpoint: string, params?: Record<string, string | number>){
  
    const httpParam = new HttpParams({ fromObject: params});
    return this.httpClient.get<T>(endpoint, { params: httpParam })
    
  }

  /**
   * Função para fazer chamadas POST genéricas para a API
   * @param endpoint: URL da API (pode ser relativa à baseUrl)
   * @param body: corpo da requisição (dados a serem enviados)
   */
  post<T>(endpoint: string, body: any): Observable<T> {
    const url = endpoint;
    return new Observable((observer) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => observer.next(data))
        .catch(error => observer.error(error))
        .finally(() => observer.complete());
    });
  }

  /**
   * Função para fazer chamadas PUT genéricas para a API
   * @param endpoint: URL da API (pode ser relativa à baseUrl)
   * @param body: corpo da requisição (dados a serem enviados)
   */
  put<T>(endpoint: string, body: any): Observable<T> {
    const url = endpoint;
    return new Observable((observer) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => observer.next(data))
        .catch(error => observer.error(error))
        .finally(() => observer.complete());
    });
  }

  /**
   * Função para fazer chamadas DELETE genéricas para a API
   * @param endpoint: URL da API (pode ser relativa à baseUrl)
   * @param params: parâmetros adicionais para a requisição
   */
  delete<T>(endpoint: string, params?: URLSearchParams): Observable<T> {
    const url = params ? `${endpoint}?${params.toString()}` : endpoint;
    return new Observable((observer) => {
      fetch(url, {
        method: 'DELETE'
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => observer.next(data))
        .catch(error => observer.error(error))
        .finally(() => observer.complete());
    });
  }

  /**
   * Função para fazer chamadas POST com cabeçalhos personalizados
   * @param endpoint: URL da API (pode ser relativa à baseUrl)
   * @param body: corpo da requisição (dados a serem enviados)
   * @param headers: cabeçalhos personalizados (opcional)
   */
  postWithHeaders<T>(endpoint: string, body: any, headers: Headers): Observable<T> {
    const url = endpoint;
    return new Observable((observer) => {
      fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => observer.next(data))
        .catch(error => observer.error(error))
        .finally(() => observer.complete());
    });
  }

  /**
   * Função para fazer upload de arquivos
   * @param endpoint: URL da API (pode ser relativa à baseUrl)
   * @param formData: dados do arquivo a ser enviado
   */
  upload<T>(endpoint: string, formData: FormData): Observable<T> {
    const url = endpoint;
    return new Observable((observer) => {
      fetch(url, {
        method: 'POST',
        body: formData
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => observer.next(data))
        .catch(error => observer.error(error))
        .finally(() => observer.complete());
    });
  }
}
