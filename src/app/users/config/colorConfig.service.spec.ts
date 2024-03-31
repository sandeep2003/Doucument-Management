/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ColorConfigService } from './colorConfig.service';

describe('Service: ColorConfig', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColorConfigService]
    });
  });

  it('should ...', inject([ColorConfigService], (service: ColorConfigService) => {
    expect(service).toBeTruthy();
  }));
});
