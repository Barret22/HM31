import { call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_TODOS, setTodos } from '../actions/todoActions.jsx';

// Заглушка для загрузки данных, замените на реальный вызов API
function fetchTodosApi() {
    return [
        { id: 1, text: 'Learn Redux-saga', completed: false },
        { id: 2, text: 'Implement TODO app', completed: false }
    ];
}

function* loadTodosSaga() {
    try {
        const todos = yield call(fetchTodosApi);
        yield put(setTodos(todos));
    } catch (e) {
        console.error('Failed to load todos', e);
    }
}

export default function* todoSaga() {
    yield takeEvery(LOAD_TODOS, loadTodosSaga);
}
