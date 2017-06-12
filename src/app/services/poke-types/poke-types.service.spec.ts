import { TestBed, inject } from '@angular/core/testing';

import { PokeTypesService } from './poke-types.service';

describe('PokeTypesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokeTypesService]
    });
  });

  it('should be created', inject([PokeTypesService], (service: PokeTypesService) => {
    expect(service).toBeTruthy();
  }));
});
