/**
 * Created by christopher on 04/05/17.
 */
import Client from './config'

export const repositories = (owner) => {
  return Client.get(`orgs/${owner}/repos`)
}

export const commits = (fullname) => {
  return Client.get(`repos/${fullname}/commits`)
}
