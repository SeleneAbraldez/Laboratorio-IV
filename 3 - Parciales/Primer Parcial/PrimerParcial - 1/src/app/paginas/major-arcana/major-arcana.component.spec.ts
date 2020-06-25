import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorArcanaComponent } from './major-arcana.component';

describe('MajorArcanaComponent', () => {
  let component: MajorArcanaComponent;
  let fixture: ComponentFixture<MajorArcanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorArcanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorArcanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
