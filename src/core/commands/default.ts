import { unknownCommand } from '../error'
import { Command, Context } from '../types'
import { description } from '../../../package.json'

export default {
  name: 'default',
  usage: '<command> [options]',
  description: description,
  hidden: true,
  action: async (ctx: Context) => {
    if (!ctx.primary) return
    // unknown command
    unknownCommand(ctx.primary, `${ctx.brand} --help`)
  }
} as Command
