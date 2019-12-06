import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiesComponent } from './aies.component';

describe('AiesComponent', () => {
  let component: AiesComponent;
  let fixture: ComponentFixture<AiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
