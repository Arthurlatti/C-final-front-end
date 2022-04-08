import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationNewComponent } from './vacation-new.component';

describe('VacationNewComponent', () => {
  let component: VacationNewComponent;
  let fixture: ComponentFixture<VacationNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacationNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
