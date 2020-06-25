import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaMarcadorComponent } from './alta-marcador.component';

describe('AltaMarcadorComponent', () => {
  let component: AltaMarcadorComponent;
  let fixture: ComponentFixture<AltaMarcadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaMarcadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaMarcadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
