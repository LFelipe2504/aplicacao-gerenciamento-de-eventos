import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEventosComponent } from './edit-eventos.component';

describe('EditEventosComponent', () => {
  let component: EditEventosComponent;
  let fixture: ComponentFixture<EditEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEventosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
