import { load } from './loader'
import { parse } from './context'
import { invoke } from './invoker'

/**
 * Run the CLI
 * @param argv command arguments
 */
export const run = async (argv?: string[]) => {
  // default argv
  argv = argv || process.argv.slice(2)

  // extract command name and extra args
  const [name, ...extras] = argv

  // load command by name
  const cmd = await load(name)

  // top level command args
  if (['default', 'help', 'version'].includes(cmd.name)) {
    extras.unshift(name)
  }

  // parse cli context
  const ctx = await parse(extras, cmd.options)

  // invoke command
  return await invoke(cmd, ctx)
}
