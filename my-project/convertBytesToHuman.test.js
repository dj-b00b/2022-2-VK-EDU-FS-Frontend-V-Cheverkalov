/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';  

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-2)).toBe(false)
  expect(convertBytesToHuman('string')).toBe(false)
  expect(convertBytesToHuman(null)).toBe(false)
  expect(convertBytesToHuman(true)).toBe(false)
  expect(convertBytesToHuman(undefined)).toBe(false)
  expect(convertBytesToHuman([1, 2, 3])).toBe(false)  
  expect(convertBytesToHuman({})).toBe(false)
  expect(convertBytesToHuman(BigInt(1234567890123456789012345678901234567890))).toBe(false) 
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(1024)).toBe('1 KB')
  expect(convertBytesToHuman(2048)).toBe('2 KB')
  expect(convertBytesToHuman(1234123412341234)).toBe('1122.43 TB')
  expect(convertBytesToHuman(10241024)).toBe('9.77 MB')
  expect(convertBytesToHuman(102410241024)).toBe('95.38 GB')
  expect(convertBytesToHuman(678)).toBe('678 B')
  expect(convertBytesToHuman(543234)).toBe('530.5 KB')
  expect(convertBytesToHuman(15000)).toBe('14.65 KB')
  expect(convertBytesToHuman(15000)).not.toBe('0.01 MB')
});

