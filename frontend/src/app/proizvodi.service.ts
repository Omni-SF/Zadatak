import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProizvodiService {
  uri = 'http://localhost:4000/pozivi'
  
  constructor(private http: HttpClient) { }

  dohvatiProizvode(){
    return this.http.get(`${this.uri}/proizvodi`);
  }
  dohvatiProizvodKrozID(id){
    return this.http.get(`${this.uri}/proizvodi/${id}`);
  }
  dodajProizvod(naziv, klientID, tip = false){
    const proizvod = {
      prNaziv: naziv,
      prTip: tip,
      prKlientID: klientID
    };
    return this.http.post(`${this.uri}/proizvodi/dodaj`, proizvod);
  }
  izmjeniProizvod(id, naziv, klientID, tip = false){
    const proizvod = {
      prNaziv: naziv,
      prTip: tip,
      prKlientID: klientID
    };
    return this.http.post(`${this.uri}/proizvodi/izmjeni/${id}`, proizvod);
  }
  ukloniProizvod(id){
    return this.http.get(`${this.uri}/proizvodi/ukloni/${id}`);
  }
}
