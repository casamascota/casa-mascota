import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirugiaComponent } from './cirugia.component';

describe('CirugiaComponent', () => {
  let component: CirugiaComponent;
  let fixture: ComponentFixture<CirugiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CirugiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CirugiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
