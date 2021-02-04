import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetpieComponent } from './tweetpie.component';

describe('TweetpieComponent', () => {
  let component: TweetpieComponent;
  let fixture: ComponentFixture<TweetpieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetpieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetpieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
