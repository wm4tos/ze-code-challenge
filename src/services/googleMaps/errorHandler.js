import { ERRORS, WARNINGS } from './messages'

export default ({ message }) => {
  const isWarning = message in WARNINGS

  const warning = {
    message: WARNINGS[String(message)],
    type: 'warning',
  }

  const error = {
    message: ERRORS[String(message)] || ERRORS.default,
    type: 'error',
  }

  return isWarning ? warning : error
}
