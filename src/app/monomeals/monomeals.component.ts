import { Component, OnInit } from '@angular/core';

import { Monomeal } from './monomeal.model';
import { MonomealService } from './monomeal.service';

@Component({
  selector: 'app-monomeals',
  templateUrl: './monomeals.component.html',
  providers: [MonomealService]
})
export class MonomealsComponent implements OnInit {
  selectedMonomeal: Monomeal;

  constructor(private monomealService: MonomealService) { }

  ngOnInit() {
    this.monomealService.monomealSelected
    .subscribe(
      (monomeal: Monomeal) => {
        this.selectedMonomeal = monomeal;
      }
    );
  }

}
