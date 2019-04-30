import { join } from 'path'
import { filesystem, system } from 'gluegun'

const runCommand = async (cmd?: string) =>
  system.run(`node ${join(__dirname, '../../bin/zce')} ${cmd}`)

test('integration:generate-command', async () => {
  const output = await runCommand('generate foo')
  expect(output).toContain('Generated file at models/foo-model.ts')

  const content = filesystem.read('models/foo-model.ts')
  expect(content).toContain(`module.exports = {\n  name: 'foo'\n}`)

  // cleanup artifact
  filesystem.remove('models')
})
