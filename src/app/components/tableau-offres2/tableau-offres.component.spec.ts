import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauOffresComponent } from './tableau-offres.component';

describe('TableauOffresComponent', () => {
  let component: TableauOffresComponent;
  let fixture: ComponentFixture<TableauOffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauOffresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauOffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
