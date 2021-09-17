import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeolcomeDialogComponent } from './weolcome-dialog.component';

describe('WeolcomeDialogComponent', () => {
  let component: WeolcomeDialogComponent;
  let fixture: ComponentFixture<WeolcomeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeolcomeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeolcomeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
