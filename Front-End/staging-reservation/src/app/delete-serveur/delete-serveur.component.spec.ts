import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteServeurComponent } from './delete-serveur.component';

describe('DeleteServeurComponent', () => {
  let component: DeleteServeurComponent;
  let fixture: ComponentFixture<DeleteServeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteServeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteServeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
