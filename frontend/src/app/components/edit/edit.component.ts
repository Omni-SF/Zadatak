import { Component, OnInit } from '@angular/core';
import { ProizvodiService } from '../../proizvodi.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private proizvodiServis: ProizvodiService) { }

  ngOnInit() {
  }

}
