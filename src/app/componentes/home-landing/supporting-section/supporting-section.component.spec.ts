import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportingSectionComponent } from './supporting-section.component';

describe('SupportingSectionComponent', () => {
  let component: SupportingSectionComponent;
  let fixture: ComponentFixture<SupportingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportingSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
