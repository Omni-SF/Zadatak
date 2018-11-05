import { Component, OnInit } from '@angular/core';
import { ProizvodiService } from '../../proizvodi.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private proizvodiServis: ProizvodiService) { }

  ngOnInit() {
  }

}
