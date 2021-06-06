import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipopiezaComponent } from './tipopieza.component';

describe('TipopiezaComponent', () => {
  let component: TipopiezaComponent;
  let fixture: ComponentFixture<TipopiezaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipopiezaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipopiezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
