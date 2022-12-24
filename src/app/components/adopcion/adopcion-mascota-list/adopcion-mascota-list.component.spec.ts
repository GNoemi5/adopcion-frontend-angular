import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdopcionMascotaListComponent } from './adopcion-mascota-list.component';

describe('AdopcionMascotaListComponent', () => {
  let component: AdopcionMascotaListComponent;
  let fixture: ComponentFixture<AdopcionMascotaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdopcionMascotaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdopcionMascotaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
