import { Injectable, Type } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CallApiService {
  
  constructor() {}

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

  /**
   * Função para fazer chamadas GET genéricas para a API
   * @param endpoint: URL da API (pode ser relativa à baseUrl)
   * @param params: parâmetros adicionais para a requisição
   */
  get<T>(endpoint: string, params?: URLSearchParams): Observable<T> {
    const url = params ? `${endpoint}?${params.toString()}` : endpoint;
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
