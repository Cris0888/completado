import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalizadosPage } from './personalizados.page';

describe('PersonalizadosPage', () => {
  let component: PersonalizadosPage;
  let fixture: ComponentFixture<PersonalizadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PersonalizadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
