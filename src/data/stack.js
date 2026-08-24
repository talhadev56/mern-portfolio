export const stackLayers = [
  {
    id: 'client',
    label: 'Client',
    tech: 'React',
    detail: 'Renders the UI and holds local state. Talks to the server only through fetch/axios calls to defined endpoints.',
  },
  {
    id: 'server',
    label: 'Server',
    tech: 'Node + Express',
    detail: 'Receives requests, runs middleware — auth checks, validation, logging — and routes them to the right handler.',
  },
  {
    id: 'logic',
    label: 'Logic',
    tech: 'Route handlers',
    detail: 'Where the actual work happens: reading the request, applying business rules, deciding what to store or return.',
  },
  {
    id: 'data',
    label: 'Data',
    tech: 'MongoDB + Mongoose',
    detail: 'Schemas define shape, Mongoose enforces it, MongoDB stores the documents. Queries come back here before the response is built.',
  },
  {
    id: 'response',
    label: 'Response',
    tech: 'JSON over HTTP',
    detail: 'The server replies with a status code and a JSON body. React updates state, and the UI reflects what actually happened.',
  },
]
