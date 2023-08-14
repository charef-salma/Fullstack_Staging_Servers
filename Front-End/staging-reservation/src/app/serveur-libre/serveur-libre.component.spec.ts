import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeurLibreComponent } from './serveur-libre.component';

describe('ServeurLibreComponent', () => {
  let component: ServeurLibreComponent;
  let fixture: ComponentFixture<ServeurLibreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeurLibreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServeurLibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
