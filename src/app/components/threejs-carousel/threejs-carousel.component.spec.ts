import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreejsCarouselComponent } from './threejs-carousel.component';

describe('ThreejsCarouselComponent', () => {
  let component: ThreejsCarouselComponent;
  let fixture: ComponentFixture<ThreejsCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreejsCarouselComponent]
    });
    fixture = TestBed.createComponent(ThreejsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
