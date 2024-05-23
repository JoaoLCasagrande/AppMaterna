import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizFisioterapiaPage } from './quiz-fisioterapia.page';

describe('QuizFisioterapiaPage', () => {
  let component: QuizFisioterapiaPage;
  let fixture: ComponentFixture<QuizFisioterapiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizFisioterapiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
