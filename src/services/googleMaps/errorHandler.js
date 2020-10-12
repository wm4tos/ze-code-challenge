const MESSAGES = {
  tryAgainMsg: 'Por favor, tente novamente',
  contactMsg: 'Se o erro persistir, contate o criador da aplicação',
}

export const ERRORS = {
  OVER_DAILY_LIMIT: `Limite diário de chamadas excedido. ${MESSAGES.tryAgainMsg} amanhã. ${MESSAGES.contactMsg}.`,
  OVER_QUERY_LIMIT: `Limite de chamadas excedido. ${MESSAGES.tryAgainMsg}. ${MESSAGES.contactMsg}.`,
  REQUEST_DENIED: `Requisição negada. ${MESSAGES.tryAgainMsg}. ${MESSAGES.contactMsg}.`,
  UNKNOWN_ERROR: `Houve um problema no servidor. ${MESSAGES.tryAgainMsg}. ${MESSAGES.contactMsg}.`,
  default: `Houve um erro. ${MESSAGES.tryAgainMsg}. ${MESSAGES.contactMsg}.`,
}

export const WARNINGS = {
  ZERO_RESULTS: 'Nenhum resultado encontrado para sua busca.',
}

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
