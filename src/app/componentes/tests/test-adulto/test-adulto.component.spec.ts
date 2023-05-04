import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAdultoComponent } from './test-adulto.component';

describe('TestAdultoComponent', () => {
  let component: TestAdultoComponent;
  let fixture: ComponentFixture<TestAdultoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestAdultoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestAdultoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
