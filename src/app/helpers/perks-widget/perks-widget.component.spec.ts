import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerksWidgetComponent } from './perks-widget.component';

describe('PerksWidgetComponent', () => {
  let component: PerksWidgetComponent;
  let fixture: ComponentFixture<PerksWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerksWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerksWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
