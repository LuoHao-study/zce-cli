import * as template from '../../../../src/core/helpers/template'

test('unit:core:helpers:template', async (): Promise<void> => {
  expect(template.render).toBeTruthy()
  expect(template.registerHelpers).toBeTruthy()
})

test('unit:core:helpers:template:render', async (): Promise<void> => {
  const result1 = template.render('foo <%= bar %>', { bar: 'baz' })
  const result2 = template.render('foo ${bar}', { bar: 'baz' })

  expect(result1).toBe('foo baz')
  expect(result2).toBe('foo baz')
})

test('unit:core:helpers:template:registerHelpers', async (): Promise<void> => {
  template.registerHelpers({
    foo: 'bar',
    bar: () => 'baz'
  })
  const result = template.render('<%= foo %> <%= bar() %>', {})

  expect(result).toBe('bar baz')
})