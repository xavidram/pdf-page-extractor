import { TestBed } from '@angular/core/testing';

import { APCPDFDragDropService } from './apc-pdf-drag-drop.service';

describe('APCPDFDragDropService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: APCPDFDragDropService = TestBed.get(APCPDFDragDropService);
    expect(service).toBeTruthy();
  });
});
