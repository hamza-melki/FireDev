import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaboutiqueComponent } from './maboutique.component';

describe('MaboutiqueComponent', () => {
  let component: MaboutiqueComponent;
  let fixture: ComponentFixture<MaboutiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaboutiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaboutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
