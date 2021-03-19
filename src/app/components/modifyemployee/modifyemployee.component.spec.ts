import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyemployeeComponent } from './modifyemployee.component';

describe('ModifyemployeeComponent', () => {
  let component: ModifyemployeeComponent;
  let fixture: ComponentFixture<ModifyemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyemployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
