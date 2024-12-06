import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymFeedComponent } from './gym-feed.component';

describe('GymFeedComponent', () => {
  let component: GymFeedComponent;
  let fixture: ComponentFixture<GymFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymFeedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
