import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaserContainerComponent } from './phaser-container.component';

describe('PhaserContainerComponent', () => {
  let component: PhaserContainerComponent;
  let fixture: ComponentFixture<PhaserContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhaserContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhaserContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
