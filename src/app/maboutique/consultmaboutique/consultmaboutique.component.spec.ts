import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultmaboutiqueComponent } from './consultmaboutique.component';

describe('ConsultmaboutiqueComponent', () => {
  let component: ConsultmaboutiqueComponent;
  let fixture: ComponentFixture<ConsultmaboutiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultmaboutiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultmaboutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
