import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharmeleonComponent } from './charmeleon.component';

describe('CharmeleonComponent', () => {
  let component: CharmeleonComponent;
  let fixture: ComponentFixture<CharmeleonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharmeleonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharmeleonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
