import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeTypesComponent } from './poke-types.component';

describe('PokeTypesComponent', () => {
  let component: PokeTypesComponent;
  let fixture: ComponentFixture<PokeTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
