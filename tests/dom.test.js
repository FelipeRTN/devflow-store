// tests/dom.test.js
import { it, expect, beforeEach } from 'vitest';

beforeEach(() => {
  document.body.innerHTML = '<div id="app">Teste</div>';
});

it('deve limpar entre testes', () => {
  expect(document.getElementById('app')).not.toBeNull();
});

// Próximo teste vai começar com DOM limpo!