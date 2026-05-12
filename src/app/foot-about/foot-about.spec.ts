import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootAbout } from './foot-about';

describe('FootAbout', () => {
  let component: FootAbout;
  let fixture: ComponentFixture<FootAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootAbout],
    }).compileComponents();

    fixture = TestBed.createComponent(FootAbout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
