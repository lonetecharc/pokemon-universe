import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeFightComponent } from './poke-fight.component';

describe('PokeFightComponent', () => {
  let component: PokeFightComponent;
  let fixture: ComponentFixture<PokeFightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeFightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeFightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
