import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PaginadorComponent } from './paginador.component';

describe('PaginadorComponent', () => {
  let component: PaginadorComponent;
  let fixture: ComponentFixture<PaginadorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
