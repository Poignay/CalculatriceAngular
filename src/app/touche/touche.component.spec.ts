import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToucheComponent } from './touche.component';

describe('ToucheComponent', () => {
  let component: ToucheComponent;
  let fixture: ComponentFixture<ToucheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToucheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
