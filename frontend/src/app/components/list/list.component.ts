import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material';

import { Proizvod } from '../../proizvod.model';
import { ProizvodiService } from '../../proizvodi.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  proizvodi: Proizvod[];
  prikazaneStavke = ['naziv', 'tip', 'klient'];

  constructor(private proizvodiServis: ProizvodiService, private router: Router) { }

  ngOnInit() {
    this.dohvatiProizvode();
  }

  dohvatiProizvode() {
    this.proizvodiServis
      .dohvatiProizvode()
      .subscribe(function (podatci: Proizvod[]){
        this.proizvodi = podatci;
        console.log('Proizvodi zatraženi ...');
        console.log(this.proizvodi);
      });
  }
  
  izmjeniProizvod(id){
    this.router.navigate([`/izmjeni/${id}`]);
  }

  ukloniProizvod(id){
    this.proizvodiServis.ukloniProizvod(id).subscribe(function (){
      this.dohvatiProizvode();
    });
  }
}
