import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrecargaComponent } from './precarga.component';

describe('PrecargaComponent', () => {
  let component: PrecargaComponent;
  let fixture: ComponentFixture<PrecargaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
