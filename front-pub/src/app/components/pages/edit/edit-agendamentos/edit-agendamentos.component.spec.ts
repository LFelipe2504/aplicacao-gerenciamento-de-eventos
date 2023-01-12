import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAgendamentosComponent } from './edit-agendamentos.component';

describe('EditAgendamentosComponent', () => {
  let component: EditAgendamentosComponent;
  let fixture: ComponentFixture<EditAgendamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAgendamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAgendamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
