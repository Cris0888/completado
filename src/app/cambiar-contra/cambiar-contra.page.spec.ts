import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CambiarContraPage } from './cambiar-contra.page';

describe('CambiarContraPage', () => {
  let component: CambiarContraPage;
  let fixture: ComponentFixture<CambiarContraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CambiarContraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
