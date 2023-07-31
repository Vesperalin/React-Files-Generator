import { strictEqual } from 'assert';

suite('Extension test', () => {
	test('Sample test', () => {
		strictEqual(-1, [1, 2, 3].indexOf(5));
		strictEqual(-1, [1, 2, 3].indexOf(0));
	});
});
