import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | books', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');
    assert.dom('h2').hasText('Welcome to The Book App!');

    assert.dom('.sidebar a.button').hasText('About Us');
    await click('.sidebar a.button');
    assert.strictEqual(currentURL(), '/about');
  });

  test('visiting /about', async function (assert) {
    await visit('/about');

    assert.strictEqual(currentURL(), '/');
    assert.dom('h2').hasText('About Us!');

    assert.dom('.sidebar a.button').hasText('Contact Us');
    await click('.sidebar a.button');
    assert.strictEqual(currentURL(), '/contact');
  });

  test('visiting /contact', async function (assert) {
    await visit('/contact');

    assert.strictEqual(currentURL(), '/');
    assert.dom('h2').hasText('Contact Us!');

    assert.dom('.sidebar a.button').hasText('About Us');
    await click('.sidebar a.button');
    assert.strictEqual(currentURL(), '/about');
  });
});
