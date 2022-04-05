import { TestBed } from '@angular/core/testing';

import { UsuarioTokenStorageService } from './usuario-token-storage.service';

describe('UsuarioTokenStorageService', () => {
  let service: UsuarioTokenStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioTokenStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
