import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http'; // importamos o httpClient

import { ConversorService } from './conversor.service';

describe(ConversorService.name, () => { 
  let http: HttpClient; 
  const service = new  ConversorService(http);
  
  it('Sucesso ao conectar com a API.', () => {
    expect(service.params).not.toBe(null);
  });
});
