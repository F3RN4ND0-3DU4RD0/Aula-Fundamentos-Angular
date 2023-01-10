import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploService2Component } from './exemplo-service2.component';

describe('ExemploService2Component', () => {
  let component: ExemploService2Component;
  let fixture: ComponentFixture<ExemploService2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemploService2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemploService2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
