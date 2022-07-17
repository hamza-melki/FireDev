import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditboutiqueComponent } from './editboutique.component';

describe('EditboutiqueComponent', () => {
  let component: EditboutiqueComponent;
  let fixture: ComponentFixture<EditboutiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditboutiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditboutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
