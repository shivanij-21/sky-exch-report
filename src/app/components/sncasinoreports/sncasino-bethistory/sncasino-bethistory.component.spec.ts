import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SncasinoBethistoryComponent } from './sncasino-bethistory.component';

describe('SncasinoBethistoryComponent', () => {
  let component: SncasinoBethistoryComponent;
  let fixture: ComponentFixture<SncasinoBethistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SncasinoBethistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SncasinoBethistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
