import { all, call } from 'redux-saga/effects'

import { categoriesSaga } from './categories/categories.saga'
import { userSaga } from './user/user.saga'

// ES-6 Generator function by function signature word and *
export function* rootSaga() {
    yield all([call(categoriesSaga), call(userSaga)])
}