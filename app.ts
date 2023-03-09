/*
 * Copyright (c) 2014-2023 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

require('./lib/startup/validateDependencies')().then(() => {
  const server = require('./server')
  server.start()
})

/*
 * Código que não quebra o app
 */


/* Nova feature de busca por produtos */


/* Nova feature de crédito pessoal */
/* Correção de valores superiores a R$1000 */
