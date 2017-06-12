import { TestBed, inject } from '@angular/core/testing';

import { PokeTyepDetailsService } from './poke-tyep-details.service';

describe('PokeTyepDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokeTyepDetailsService]
    });
  });

  it('should be created', inject([PokeTyepDetailsService], (service: PokeTyepDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
