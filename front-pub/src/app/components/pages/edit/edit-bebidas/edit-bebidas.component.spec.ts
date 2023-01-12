import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBebidasComponent } from './edit-bebidas.component';

describe('EditBebidasComponent', () => {
  let component: EditBebidasComponent;
  let fixture: ComponentFixture<EditBebidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBebidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBebidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
