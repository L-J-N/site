import calculPercent from './calculPercent';
import { assert } from 'chai';

it('calcul un pourcentage simple', () => {
  const percent = calculPercent(10, 100);

  assert(percent === '10.00');
});

it('calcul un pourcentage simple', () => {
  const percent = calculPercent(5120, 654812);

  assert(percent === '0.78');
});

it('gère le isNaNm le null et /0', () => {
  const percent = calculPercent(null, 100);
  assert(percent === 0);
  const percent1 = calculPercent(10, null);
  assert(percent1 === 0);
  const percent2 = calculPercent(undefined, 100);
  assert(percent2 === 0);
  const percent3 = calculPercent(10, undefined);
  assert(percent3 === 0);
  const percent4 = calculPercent(10, 0);
  assert(percent4 === 0);
});
