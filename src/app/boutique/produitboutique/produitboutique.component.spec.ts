import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitboutiqueComponent } from './produitboutique.component';

describe('ProduitboutiqueComponent', () => {
  let component: ProduitboutiqueComponent;
  let fixture: ComponentFixture<ProduitboutiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitboutiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitboutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
