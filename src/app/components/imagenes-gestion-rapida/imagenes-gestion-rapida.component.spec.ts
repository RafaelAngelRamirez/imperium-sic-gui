import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ImagenesGestionRapidaComponent } from './imagenes-gestion-rapida.component';

describe('ImagenesGestionRapidaComponent', () => {
  let component: ImagenesGestionRapidaComponent;
  let fixture: ComponentFixture<ImagenesGestionRapidaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenesGestionRapidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenesGestionRapidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
