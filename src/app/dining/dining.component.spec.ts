import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiningComponent } from './dining/dining.component';

describe('DiningComponent', () => {
  let component: DiningComponent;
  let fixture: ComponentFixture<DiningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
