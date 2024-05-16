import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FimQuizPage } from './fim-quiz.page';

describe('FimQuizPage', () => {
  let component: FimQuizPage;
  let fixture: ComponentFixture<FimQuizPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FimQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
