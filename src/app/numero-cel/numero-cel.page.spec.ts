import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumeroCelPage } from './numero-cel.page';

describe('NumeroCelPage', () => {
  let component: NumeroCelPage;
  let fixture: ComponentFixture<NumeroCelPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeroCelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
