import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AudiobookRevistaPage } from './audiobook-revista.page';

describe('AudiobookRevistaPage', () => {
  let component: AudiobookRevistaPage;
  let fixture: ComponentFixture<AudiobookRevistaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiobookRevistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
