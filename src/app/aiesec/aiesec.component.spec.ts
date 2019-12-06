import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiesecComponent } from './aiesec.component';

describe('AiesecComponent', () => {
  let component: AiesecComponent;
  let fixture: ComponentFixture<AiesecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiesecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiesecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
