import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnosPasadosComponent } from './turnos-pasados.component';

describe('TurnosPasadosComponent', () => {
  let component: TurnosPasadosComponent;
  let fixture: ComponentFixture<TurnosPasadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnosPasadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnosPasadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
