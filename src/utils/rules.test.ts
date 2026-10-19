import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getIllustrativeColor,
  isCompliantTargetLabel,
  validatePlanIntegrity,
  verifyContactDetails,
  verifyDisclaimerExact,
  REQUIRED_DISCLAIMER,
} from './rules.ts';
import { SITE_CONFIG } from '../config/siteConfig.ts';

test('verifyContactDetails matches Section 2 Rule 6 exactly', () => {
  const result = verifyContactDetails(SITE_CONFIG.contact);
  assert.equal(result, true, 'Contact details must match exactly');
  assert.equal(SITE_CONFIG.contact.email, 'drshustigaamv@gmail.com');
  assert.equal(SITE_CONFIG.contact.institution, 'Rathinam Technical Campus, Coimbatore');
  assert.equal(SITE_CONFIG.contact.team, 'AQUANEX 007');
});

test('verifyDisclaimerExact matches Rule 5 verbatim', () => {
  assert.equal(
    verifyDisclaimerExact(SITE_CONFIG.disclaimer),
    true,
    'Disclaimer must match Section 2 Rule 5 verbatim'
  );
  assert.equal(
    SITE_CONFIG.disclaimer,
    'ChloroQuant is a proposed screening technology, not a certified drinking-water safety instrument. FRC measurements alone do not establish that water is safe to drink.'
  );
});

test('validatePlanIntegrity ensures every item is Planned and none are ticked/done', () => {
  assert.equal(validatePlanIntegrity(SITE_CONFIG.validationPlan), true);
  for (const item of SITE_CONFIG.validationPlan) {
    assert.equal(item.status, 'Planned');
  }
});

test('isCompliantTargetLabel requires design target or pending validation', () => {
  assert.equal(isCompliantTargetLabel('Design targets — pending validation'), true);
  assert.equal(isCompliantTargetLabel('Target sensitivity: 0.1 mg/L (design target, pending validation)'), true);
  assert.equal(isCompliantTargetLabel('Certified 0.1 mg/L accuracy'), false);
});

test('getIllustrativeColor shifts from pale unreacted to blue-violet without mg/L claim', () => {
  const zero = getIllustrativeColor(0);
  assert.equal(zero.hex, '#f8fafc');
  assert.match(zero.label, /Clear/);

  const mid = getIllustrativeColor(50);
  assert.equal(mid.hex, '#38bdf8');

  const full = getIllustrativeColor(100);
  assert.equal(full.hex, '#312e81');
  assert.match(full.label, /Blue-Violet/);
});
