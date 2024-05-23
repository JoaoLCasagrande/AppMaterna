import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FimQuizNutricaoPage } from './fim-quiz-nutricao.page';

describe('FimQuizNutricaoPage', () => {
  let component: FimQuizNutricaoPage;
  let fixture: ComponentFixture<FimQuizNutricaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FimQuizNutricaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
