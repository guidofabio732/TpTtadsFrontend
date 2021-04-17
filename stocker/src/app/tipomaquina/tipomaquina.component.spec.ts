import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipomaquinaComponent } from './tipomaquina.component';

describe('TipomaquinaComponent', () => {
  let component: TipomaquinaComponent;
  let fixture: ComponentFixture<TipomaquinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipomaquinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipomaquinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
