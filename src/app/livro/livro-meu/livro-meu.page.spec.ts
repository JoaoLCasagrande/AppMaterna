import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LivroMeuPage } from './livro-meu.page';

describe('LivroMeuPage', () => {
  let component: LivroMeuPage;
  let fixture: ComponentFixture<LivroMeuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroMeuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
