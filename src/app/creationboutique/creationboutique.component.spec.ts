import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationboutiqueComponent } from './creationboutique.component';

describe('CreationboutiqueComponent', () => {
  let component: CreationboutiqueComponent;
  let fixture: ComponentFixture<CreationboutiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationboutiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationboutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
