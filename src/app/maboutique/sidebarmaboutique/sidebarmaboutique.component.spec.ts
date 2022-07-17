import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarmaboutiqueComponent } from './sidebarmaboutique.component';

describe('SidebarmaboutiqueComponent', () => {
  let component: SidebarmaboutiqueComponent;
  let fixture: ComponentFixture<SidebarmaboutiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarmaboutiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarmaboutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
