import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoosterboutiqueComponent } from './boosterboutique.component';

describe('BoosterboutiqueComponent', () => {
  let component: BoosterboutiqueComponent;
  let fixture: ComponentFixture<BoosterboutiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoosterboutiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoosterboutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
