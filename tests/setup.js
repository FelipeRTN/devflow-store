// tests/setup.js
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/dom';
import matchers from '@testing-library/jest-dom/matchers';

// Adiciona matchers como toBeInTheDocument()
expect.extend(matchers);

// Limpa o DOM após cada teste
afterEach(() => {
  cleanup();
});