import '@testing-library/jest-dom/vitest';
import { server } from './server';
import { afterAll, afterEach, beforeAll } from 'vitest';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());