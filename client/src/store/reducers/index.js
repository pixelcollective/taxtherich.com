import { combineReducers } from 'redux'
import color from './color'
import action from './actions'

const rootReducer = combineReducers({
  color,
  action,
})

export default rootReducer
