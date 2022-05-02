import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FenetreDeTestComponent } from './fenetre-de-test.component';

describe('FenetreDeTestComponent', () => {
  let component: FenetreDeTestComponent;
  let fixture: ComponentFixture<FenetreDeTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FenetreDeTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FenetreDeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
