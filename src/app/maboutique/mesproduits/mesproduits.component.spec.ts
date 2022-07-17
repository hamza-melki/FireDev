import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesproduitsComponent } from './mesproduits.component';

describe('MesproduitsComponent', () => {
  let component: MesproduitsComponent;
  let fixture: ComponentFixture<MesproduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesproduitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesproduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
