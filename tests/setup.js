// tests/setup.js
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/dom';

// Limpa o DOM após cada teste
afterEach(() => {
  cleanup();
});