import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmInfoComponent } from './farm-info.component';

describe('FarmInfoComponent', () => {
  let component: FarmInfoComponent;
  let fixture: ComponentFixture<FarmInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
