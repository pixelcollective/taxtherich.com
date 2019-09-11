import { combineReducers } from 'redux'
import color from './color'
import action from './actions'
import paths from './paths'

const rootReducer = combineReducers({
  color,
  action,
  paths,
})

export default rootReducer
