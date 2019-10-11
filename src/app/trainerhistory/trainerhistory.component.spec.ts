import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerhistoryComponent } from './trainerhistory.component';

describe('TrainerhistoryComponent', () => {
  let component: TrainerhistoryComponent;
  let fixture: ComponentFixture<TrainerhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
