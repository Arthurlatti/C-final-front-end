import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationDeleteComponent } from './vacation-delete.component';

describe('VacationDeleteComponent', () => {
  let component: VacationDeleteComponent;
  let fixture: ComponentFixture<VacationDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacationDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
