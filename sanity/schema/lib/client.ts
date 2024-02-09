import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn, token } from '../../env'

export const readClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

export const writeClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skKi4g6QyAAVA0u6js8E9t2zz4OWcRc9UMZIR0tyDaNLBrF8yl5NTBnk5n2JecAGfwyEo3NVHFWX5bAG5i4aLoLCbDaCFKQ5EFnq5fGQJHO94X3mB1Cf9fiAA8PhTOBWd2TyNtBk950249vs4XTvpuzIdjEqgehuUDqOHigLol1yj44U9dda",
})

