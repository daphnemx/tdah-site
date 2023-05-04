import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNinoComponent } from './test-nino.component';

describe('TestNinoComponent', () => {
  let component: TestNinoComponent;
  let fixture: ComponentFixture<TestNinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestNinoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestNinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
