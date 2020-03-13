import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionPageComponent } from './champion-page.component';

describe('ChampionPageComponent', () => {
  let component: ChampionPageComponent;
  let fixture: ComponentFixture<ChampionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
