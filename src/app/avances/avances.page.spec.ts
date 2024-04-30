import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvancesPage } from './avances.page';

describe('AvancesPage', () => {
  let component: AvancesPage;
  let fixture: ComponentFixture<AvancesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AvancesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
