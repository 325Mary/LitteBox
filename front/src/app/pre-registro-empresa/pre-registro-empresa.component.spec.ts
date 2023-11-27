import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreRegistroEmpresaComponent } from './pre-registro-empresa.component';

describe('PreRegistroEmpresaComponent', () => {
  let component: PreRegistroEmpresaComponent;
  let fixture: ComponentFixture<PreRegistroEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreRegistroEmpresaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreRegistroEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
