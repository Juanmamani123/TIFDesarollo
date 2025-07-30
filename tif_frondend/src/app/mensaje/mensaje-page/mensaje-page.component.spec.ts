import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajePageComponent } from './mensaje-page.component';

describe('MensajePageComponent', () => {
  let component: MensajePageComponent;
  let fixture: ComponentFixture<MensajePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensajePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensajePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
