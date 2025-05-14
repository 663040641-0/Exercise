import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PidgeotComponent } from './pidgeot.component';

describe('PidgeotComponent', () => {
  let component: PidgeotComponent;
  let fixture: ComponentFixture<PidgeotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PidgeotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PidgeotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
