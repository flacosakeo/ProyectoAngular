import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialLaboralComponent } from './historial-laboral.component';

describe('HistorialLaboralComponent', () => {
  let component: HistorialLaboralComponent;
  let fixture: ComponentFixture<HistorialLaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialLaboralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
