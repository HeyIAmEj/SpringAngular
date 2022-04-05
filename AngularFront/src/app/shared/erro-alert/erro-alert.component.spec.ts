import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroAlertComponent } from './erro-alert.component';

describe('ErroAlertComponent', () => {
  let component: ErroAlertComponent;
  let fixture: ComponentFixture<ErroAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErroAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErroAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
