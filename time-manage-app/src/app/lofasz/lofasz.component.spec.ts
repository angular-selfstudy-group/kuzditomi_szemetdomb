import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LofaszComponent } from './lofasz.component';

describe('LofaszComponent', () => {
  let component: LofaszComponent;
  let fixture: ComponentFixture<LofaszComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LofaszComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LofaszComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
