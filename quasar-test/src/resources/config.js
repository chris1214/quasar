/**
 * Created by christopher on 04/05/17.
 */
import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 10000
})
