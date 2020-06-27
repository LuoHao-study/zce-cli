import command from './help'
import { createFakeContext } from '../../../test/utils'
const pkg = require('../../../package.json')

let log: jest.SpyInstance
let exit: jest.SpyInstance

beforeEach(async () => {
  log = jest.spyOn(console, 'log').mockImplementation()
  exit = jest.spyOn(process, 'exit').mockImplementation()
})

afterEach(async () => {
  log && log.mockRestore()
  exit && exit.mockRestore()
})

test('unit:core:commands:help', async () => {
  expect(command.name).toBe('help')
  expect(command.usage).toBe('help <command>')
  expect(command.description).toBe('output usage information.')
  expect(typeof command.action).toBe('function')
})

test('unit:core:commands:help:action', async () => {
  const ctx = createFakeContext()
  await command.action(ctx)
  expect(log.mock.calls[0][0]).toBe(pkg.description)
  expect(exit.mock.calls[0][0]).toBe(undefined)
})

// TODO: need more help test
