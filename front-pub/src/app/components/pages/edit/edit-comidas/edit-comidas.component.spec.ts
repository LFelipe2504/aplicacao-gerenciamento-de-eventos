import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComidasComponent } from './edit-comidas.component';

describe('EditComidasComponent', () => {
  let component: EditComidasComponent;
  let fixture: ComponentFixture<EditComidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditComidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditComidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
