import { takeLatest, all, call, put } from 'redux-saga/effects'

import { getCatagoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { fetchCategoriesSuccess, fetchCategoriesFailed } from './category.action';
import { CATEGORIES_ACTION_TYPES } from './category.types';


export function* sagaFetchCategoriesAsync() {
    try {
        const categoriesArray = yield call(getCatagoriesAndDocuments, 'categories');
        yield put(fetchCategoriesSuccess(categoriesArray))
    } catch (error) {
        yield put(fetchCategoriesFailed(error))
    }
}

export function* onFetchCategories() {
    yield takeLatest(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
        sagaFetchCategoriesAsync
    )
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)])
}