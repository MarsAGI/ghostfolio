import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { products } from '../products';

@Component({
  host: { class: 'page' },
  imports: [CommonModule, MatButtonModule, RouterModule],
  selector: 'gf-compound-planning-page',
  standalone: true,
  styleUrls: ['../product-page-template.scss'],
  templateUrl: '../product-page-template.html'
})
export class CompoundPlanningPageComponent {
  public product1 = products.find(({ key }) => {
    return key === 'ghostfolio';
  });

  public product2 = products.find(({ key }) => {
    return key === 'compound-planning';
  });

  public routerLinkAbout = ['/' + $localize`about`];
  public routerLinkFeatures = ['/' + $localize`features`];
  public routerLinkResourcesPersonalFinanceTools = [
    '/' + $localize`resources`,
    'personal-finance-tools'
  ];
}
