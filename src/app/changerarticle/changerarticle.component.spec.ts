import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangerarticleComponent } from './changerarticle.component';

describe('ChangerarticleComponent', () => {
  let component: ChangerarticleComponent;
  let fixture: ComponentFixture<ChangerarticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangerarticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangerarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
