import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertFromToComponent } from './convert-from-to.component';

describe('ConvertFromToComponent', () => {
  let component: ConvertFromToComponent;
  let fixture: ComponentFixture<ConvertFromToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertFromToComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertFromToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
