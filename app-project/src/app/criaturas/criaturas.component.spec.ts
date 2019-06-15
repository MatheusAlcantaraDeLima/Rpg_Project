import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaturasComponent } from './criaturas.component';

describe('CriaturasComponent', () => {
  let component: CriaturasComponent;
  let fixture: ComponentFixture<CriaturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriaturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
