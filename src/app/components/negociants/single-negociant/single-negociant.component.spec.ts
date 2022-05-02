import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNegociantComponent } from './single-negociant.component';

describe('SingleNegociantComponent', () => {
  let component: SingleNegociantComponent;
  let fixture: ComponentFixture<SingleNegociantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleNegociantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleNegociantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
