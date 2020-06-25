import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorArcanaComponent } from './minor-arcana.component';

describe('MinorArcanaComponent', () => {
  let component: MinorArcanaComponent;
  let fixture: ComponentFixture<MinorArcanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinorArcanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorArcanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
