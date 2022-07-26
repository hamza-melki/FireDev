import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MespubliciteComponent } from './mespublicite.component';

describe('MespubliciteComponent', () => {
  let component: MespubliciteComponent;
  let fixture: ComponentFixture<MespubliciteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MespubliciteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MespubliciteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
