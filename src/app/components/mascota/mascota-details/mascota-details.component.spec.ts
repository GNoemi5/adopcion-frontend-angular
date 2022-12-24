import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaDetailsComponent } from './mascota-details.component';

describe('MascotaDetailsComponent', () => {
  let component: MascotaDetailsComponent;
  let fixture: ComponentFixture<MascotaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MascotaDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MascotaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
