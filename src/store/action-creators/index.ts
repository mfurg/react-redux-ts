import * as UserActionCreators from './user'
import * as ItemActionCreators from './item'
import * as CartActionCreators from './cart'

export default {
    ...ItemActionCreators,
    ...UserActionCreators,
    ...CartActionCreators
}