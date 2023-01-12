import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioComidasComponent } from './formulario-comidas.component';

describe('FormularioComidasComponent', () => {
  let component: FormularioComidasComponent;
  let fixture: ComponentFixture<FormularioComidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioComidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioComidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
