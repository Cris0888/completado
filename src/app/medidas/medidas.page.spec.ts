import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedidasPage } from './medidas.page';

describe('MedidasPage', () => {
  let component: MedidasPage;
  let fixture: ComponentFixture<MedidasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MedidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
