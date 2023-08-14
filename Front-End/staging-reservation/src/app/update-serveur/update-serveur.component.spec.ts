import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateServeurComponent } from './update-serveur.component';

describe('UpdateServeurComponent', () => {
  let component: UpdateServeurComponent;
  let fixture: ComponentFixture<UpdateServeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateServeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateServeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
