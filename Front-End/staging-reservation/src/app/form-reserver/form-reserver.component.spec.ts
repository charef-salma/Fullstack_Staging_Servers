import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReserverComponent } from './form-reserver.component';

describe('FormReserverComponent', () => {
  let component: FormReserverComponent;
  let fixture: ComponentFixture<FormReserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormReserverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormReserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
