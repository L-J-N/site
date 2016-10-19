import calculRemainingDay from './calculRemainingDay';
import { assert } from 'chai';

it('gère le null', () => {
  const diff = calculRemainingDay(null);
  assert(diff === 0);
});

it('gère le undefined', () => {
  const diff = calculRemainingDay(undefined);
  assert(diff === 0);
});

it('diff 1', () => {
  const date = new Date();
  const diff = calculRemainingDay(formatDate(date));
  assert(diff === 1);
});

it('diff = 0', () => {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  const diff = calculRemainingDay(formatDate(date));
  assert(diff === 0);
});

it('diff < 0', () => {
  const date = new Date();
  date.setDate(date.getDate() - 100);
  const diff = calculRemainingDay(formatDate(date));
  assert(diff === 0);
});


it('diff 2', () => {
  const date = new Date();
  date.setDate(date.getDate() + 2);
  const diff = calculRemainingDay(formatDate(date));
  assert(diff === 2);
});

function formatDate(date) {
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
}
