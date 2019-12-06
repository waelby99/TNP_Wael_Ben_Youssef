import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AieseComponent } from './aiese.component';

describe('AieseComponent', () => {
  let component: AieseComponent;
  let fixture: ComponentFixture<AieseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AieseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AieseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
