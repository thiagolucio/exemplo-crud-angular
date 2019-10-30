import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarLembretesComponent } from './editar-lembretes.component';

describe('EditarLembretesComponent', () => {
  let component: EditarLembretesComponent;
  let fixture: ComponentFixture<EditarLembretesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarLembretesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarLembretesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
