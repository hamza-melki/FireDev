import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentmaboutiqueComponent } from './contentmaboutique.component';

describe('ContentmaboutiqueComponent', () => {
  let component: ContentmaboutiqueComponent;
  let fixture: ComponentFixture<ContentmaboutiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentmaboutiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentmaboutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
