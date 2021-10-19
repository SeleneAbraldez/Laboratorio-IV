import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SacarTurnoRecepcionistaComponent } from './sacar-turno-recepcionista.component';

describe('SacarTurnoRecepcionistaComponent', () => {
  let component: SacarTurnoRecepcionistaComponent;
  let fixture: ComponentFixture<SacarTurnoRecepcionistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SacarTurnoRecepcionistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SacarTurnoRecepcionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
