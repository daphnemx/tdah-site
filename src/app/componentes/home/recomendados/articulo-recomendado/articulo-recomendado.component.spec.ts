import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloRecomendadoComponent } from './articulo-recomendado.component';

describe('ArticuloComponent', () => {
  let component: ArticuloRecomendadoComponent;
  let fixture: ComponentFixture<ArticuloRecomendadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloRecomendadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticuloRecomendadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
