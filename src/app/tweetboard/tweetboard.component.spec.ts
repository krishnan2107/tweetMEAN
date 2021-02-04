import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetboardComponent } from './tweetboard.component';

describe('TweetboardComponent', () => {
  let component: TweetboardComponent;
  let fixture: ComponentFixture<TweetboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
