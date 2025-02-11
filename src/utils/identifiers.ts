const CONVERSATION_ID_LENGTH = 24
const MESSAGE_ID_LENGTH = 24
const STEP_ID_LENGTH = 24

export function generateMessageId() {
  return "message_" + Zotero.Utilities.randomString(MESSAGE_ID_LENGTH)
}

export function generateStepId() {
  return "step_" + Zotero.Utilities.randomString(STEP_ID_LENGTH)
}

export function generateActionId() {
  return "action_" + Zotero.Utilities.randomString(STEP_ID_LENGTH)
}