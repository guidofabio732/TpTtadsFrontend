import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinaspiezasComponent } from './maquinaspiezas.component';

describe('MaquinaspiezasComponent', () => {
  let component: MaquinaspiezasComponent;
  let fixture: ComponentFixture<MaquinaspiezasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaquinaspiezasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquinaspiezasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
