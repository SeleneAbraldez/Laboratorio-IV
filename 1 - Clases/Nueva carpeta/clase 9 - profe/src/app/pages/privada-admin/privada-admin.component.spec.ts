import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivadaAdminComponent } from './privada-admin.component';

describe('PrivadaAdminComponent', () => {
  let component: PrivadaAdminComponent;
  let fixture: ComponentFixture<PrivadaAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivadaAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivadaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
