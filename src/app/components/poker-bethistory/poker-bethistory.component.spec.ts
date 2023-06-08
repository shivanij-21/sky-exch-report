import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerBethistoryComponent } from './poker-bethistory.component';

describe('PokerBethistoryComponent', () => {
  let component: PokerBethistoryComponent;
  let fixture: ComponentFixture<PokerBethistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokerBethistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokerBethistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
