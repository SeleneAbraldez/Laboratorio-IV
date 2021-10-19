import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarixComponent } from './usuarix.component';

describe('UsuarixComponent', () => {
  let component: UsuarixComponent;
  let fixture: ComponentFixture<UsuarixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
