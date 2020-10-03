import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTypesComponent } from './menu-types.component';

describe('MenuTypesComponent', () => {
  let component: MenuTypesComponent;
  let fixture: ComponentFixture<MenuTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
