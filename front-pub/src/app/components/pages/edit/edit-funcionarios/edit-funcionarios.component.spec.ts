import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFuncionariosComponent } from './edit-funcionarios.component';

describe('EditFuncionariosComponent', () => {
  let component: EditFuncionariosComponent;
  let fixture: ComponentFixture<EditFuncionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFuncionariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
