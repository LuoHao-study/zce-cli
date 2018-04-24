/**
 * generator:default
 */

const test = require('ava')
const Defaults = require('../../../lib/generator/defaults')

test('generator:defaults:all', async t => {
  const defaults = await Defaults.init(__dirname)
  t.is(defaults.name(), 'generator')
  await defaults.username()
  await defaults.fullname()
  await defaults.author()
  defaults.version()
  defaults.license()
  defaults.repository()
  defaults.repo()
  t.pass()
})

test('generator:defaults:error', async t => {
  await t.throws(Defaults.init(), TypeError)
})

test('generator:defaults:save', async t => {
  await Defaults.save({ foo: 'bar' })
  await Defaults.save({ bar: 'baz', repo: 'demo' })
  const defaults = await Defaults.init(__dirname)
  t.is(defaults.foo, 'bar')
  t.is(defaults.bar, 'baz')
  t.is(typeof defaults.repo, 'function')
})
