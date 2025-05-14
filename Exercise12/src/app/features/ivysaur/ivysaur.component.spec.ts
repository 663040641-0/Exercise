import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvysaurComponent } from './ivysaur.component';

describe('IvysaurComponent', () => {
  let component: IvysaurComponent;
  let fixture: ComponentFixture<IvysaurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IvysaurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IvysaurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
