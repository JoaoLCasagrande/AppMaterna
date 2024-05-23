import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FimQuizFisioterapiaPage } from './fim-quiz-fisioterapia.page';

describe('FimQuizFisioterapiaPage', () => {
  let component: FimQuizFisioterapiaPage;
  let fixture: ComponentFixture<FimQuizFisioterapiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FimQuizFisioterapiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
