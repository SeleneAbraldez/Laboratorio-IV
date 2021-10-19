import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTurnosRecepcionistaComponent } from './ver-turnos-recepcionista.component';

describe('VerTurnosRecepcionistaComponent', () => {
  let component: VerTurnosRecepcionistaComponent;
  let fixture: ComponentFixture<VerTurnosRecepcionistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerTurnosRecepcionistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTurnosRecepcionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
