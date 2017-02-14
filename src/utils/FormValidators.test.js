import { isRequired, isMail, isTelephone } from './FormValidator';
import { expect } from 'chai';

it('isRequired gère le null', () => {
  const err = isRequired(null);
  expect(err).to.be.equals('Ce champ est obligatoire');
});

it('isRequired gère le undefined', () => {
  const err = isRequired(undefined);
  expect(err).to.be.equals('Ce champ est obligatoire');
});

it('isRequired gère le ""', () => {
  const err = isRequired("");
  expect(err).to.be.equals('Ce champ est obligatoire');
});

it('isRequired gère le "      "', () => {
  const err = isRequired("     ");
  expect(err).to.be.equals('Ce champ est obligatoire');
});

it('isRequired gère le 0', () => {
  const err = isRequired(0);
  expect(err).to.be.equals('Ce champ est obligatoire');
});

it('isRequired gère le cas ok', () => {
  const err = isRequired('ok');
  expect(err).to.be.undefined;
});

it('isRequired gère le cas false', () => {
  const err = isRequired(false);
  expect(err).to.be.equals('Ce champ est obligatoire');
});

it('isRequired gère le cas true', () => {
  const err = isRequired(true);
  expect(err).to.be.undefined;
});

it('isMail gère le null', () => {
  const err = isMail(null);
  expect(err).to.be.equals('Le format du mail n\'est pas correct');
});

it('isMail gère le ko', () => {
  const err = isMail("testtesttest");
  expect(err).to.be.equals('Le format du mail n\'est pas correct');
});

it('isMail gère le cas ok', () => {
  const err = isMail('test@test.fr');
  expect(err).to.be.undefined;
});

it('isTelephone gère le null', () => {
  const err = isTelephone(null);
  expect(err).to.be.equals('Le format du téléphone n\'est pas correct');
});

it('isTelephone gère le ko', () => {
  const err = isTelephone("9885984918189188");
  expect(err).to.be.equals('Le format du téléphone n\'est pas correct');
});

it('isTelephone gère le cas ok', () => {
  const err = isTelephone('+33678958478');
  expect(err).to.be.undefined;
});



