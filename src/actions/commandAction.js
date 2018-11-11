export const COMMAND_PRESENTATION = 'COMMAND_PRESENTATION'
export const SEND_NAV_CMD = 'SAVE_NAV_CMD'

export const commandPresentation = () => ({
  type: COMMAND_PRESENTATION,
})

export const sendNavCmd = cmd => ({
  type: SEND_NAV_CMD,
  cmd,
})
