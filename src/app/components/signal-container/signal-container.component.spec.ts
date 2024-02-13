import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalContainerComponent } from './signal-container.component';

describe('SignalContainerComponent', () => {
  let component: SignalContainerComponent;
  let fixture: ComponentFixture<SignalContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
