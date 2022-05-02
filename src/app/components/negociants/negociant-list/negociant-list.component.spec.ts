import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegociantListComponent } from './negociant-list.component';

describe('NegociantListComponent', () => {
  let component: NegociantListComponent;
  let fixture: ComponentFixture<NegociantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegociantListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NegociantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
