import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NouveauxTarifsComponent } from './nouveaux-tarifs.component';

describe('NouveauxTarifsComponent', () => {
  let component: NouveauxTarifsComponent;
  let fixture: ComponentFixture<NouveauxTarifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauxTarifsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauxTarifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
