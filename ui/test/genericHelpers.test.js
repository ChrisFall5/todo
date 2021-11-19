import { separateTodos } from '../helpers/genericHelpers';
import { mockTodos } from './mocks';

test('separateTodos separates complete and incomplete todos', () => {
  const { completed, incomplete } = separateTodos(mockTodos);
  
  // White box: you know something about the input
  // in this case, there are 4 todos, 2 completed, 2 incomplete
  // if mock data were to change, this test would likely fail
  expect(completed.length).toBe(2);
  expect(incomplete.length).toBe(2);

  // Tests boundaries of each array
  expect(completed[0].isComplete).toBe(true);
  expect(completed[completed.length - 1].isComplete).toBe(true);
  expect(incomplete[0].isComplete).toBe(false);
  expect(incomplete[incomplete.length - 1].isComplete).toBe(false);
});
