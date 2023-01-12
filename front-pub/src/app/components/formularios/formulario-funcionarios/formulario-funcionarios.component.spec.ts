import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioFuncionariosComponent } from './formulario-funcionarios.component';

describe('FormularioFuncionariosComponent', () => {
  let component: FormularioFuncionariosComponent;
  let fixture: ComponentFixture<FormularioFuncionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioFuncionariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
