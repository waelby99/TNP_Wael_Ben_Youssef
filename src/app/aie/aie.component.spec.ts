import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AieComponent } from './aie.component';

describe('AieComponent', () => {
  let component: AieComponent;
  let fixture: ComponentFixture<AieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
