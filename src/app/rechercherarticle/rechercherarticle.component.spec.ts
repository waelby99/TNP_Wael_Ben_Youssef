import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherarticleComponent } from './rechercherarticle.component';

describe('RechercherarticleComponent', () => {
  let component: RechercherarticleComponent;
  let fixture: ComponentFixture<RechercherarticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercherarticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercherarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
