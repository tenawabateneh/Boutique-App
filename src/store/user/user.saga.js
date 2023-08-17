import { takeLatest, put, all, call } from 'redux-saga/effects'

import { USER_ACTION_TYPES } from "./user.types";
import {
    signInSuccess,
    signInFailed,
    signUpFailed,
    signUpSuccess,
    signOutSuccess,
    signOutFailed
} from './user.action';
import {
    getCurrentUser,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup,
    createAuthUserWithEmailAndPassword,
    signOutUser
} from '../../utils/firebase/firebase.utils';


// Here are some saga's
export function* getUserSnapshotFromUserAuth(userAuth, addationalDetails) {
    try {
        const userSnaphot = yield call(
            createUserDocumentFromAuth,
            userAuth,
            addationalDetails
        );
        yield put(signInSuccess({ id: userSnaphot.id, ...userSnaphot.data() }))
    } catch (error) {
        yield put(signInFailed(error))
    }
}

// Below this is the generator functions
export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield call(signInAuthUserWithEmailAndPassword, email, password);
        yield call(getUserSnapshotFromUserAuth, user)
    } catch (error) {
        yield put(signInFailed(error))
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield call(signInWithGooglePopup)
        yield call(getUserSnapshotFromUserAuth, user)
    } catch (error) {
        yield put(signInFailed(error))
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser)
        if (!userAuth) return;
        yield call(getUserSnapshotFromUserAuth, userAuth)
    } catch (error) {
        yield put(signInFailed(error))
    }
}



export function* signUp({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield call(createAuthUserWithEmailAndPassword, email, password)
        yield put(signUpSuccess(user, { displayName }))
    } catch (error) {
        yield put(signUpFailed(error))
    }
}

export function* signInAfterSignUp({ payload: { user, addationalDetails } }) {
    yield call(getUserSnapshotFromUserAuth, user, addationalDetails)
}

export function* signOut() {
    try {
        yield call(signOutUser)
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailed(error))
    }
}

// Below this are the entry point saga's and the aboves are generator functions
// takeLatest means giveme all the latest user action from all
export function* onSignUpSuccess() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onSignUpStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp)
}

export function* onEmailSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onGoogleSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)

}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut)
}

export function* userSaga() {
    yield all([
        call(onCheckUserSession),
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onSignOutStart),
    ]);
}