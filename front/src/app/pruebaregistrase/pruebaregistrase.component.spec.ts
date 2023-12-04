import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaregistraseComponent } from './pruebaregistrase.component';

describe('PruebaregistraseComponent', () => {
  let component: PruebaregistraseComponent;
  let fixture: ComponentFixture<PruebaregistraseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebaregistraseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PruebaregistraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
