import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidasNacComponent } from './partidas-nac.component';

describe('PartidasNacComponent', () => {
  let component: PartidasNacComponent;
  let fixture: ComponentFixture<PartidasNacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartidasNacComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartidasNacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
