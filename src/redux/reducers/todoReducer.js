const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const SET_TAG_PURPLE = 'SET_TAG_PURPLE'
const SET_TAG_ORANGE = 'SET_TAG_ORANGE'
const SET_TAG_GREEN = 'SET_TAG_GREEN'
const SET_TAG_RED = 'SET_TAG_RED'
const FINISH_TODO = 'FINISH_TODO'
const SEARCH_TODO_IN_ALL = 'SEARCH_TODO_IN_ALL'
const SET_TODOS = 'SET_TODOS'
const REFRESH_TODO = 'REFRESH_TODO'
const EDIT_TODO = 'EDIT_TODO'
const SET_EDITED_TODO = 'SET_EDITED_TODO'
const TOGGLE_TODO_FORM = 'TOGGLE_TODO_FORM'
const SET_IS_EDITING = 'SET_IS_EDITING'
const TOGGLE_MODAL = 'TOGGLE_MODAL'
const TOGGLE_OVERLAY_IS_OPENING = 'TOGGLE_OVERLAY_IS_OPENING'
const SET_DELETING_IN_PROGRESS_ITEM_ID = 'SET_DELETING_IN_PROGRESS_ITEM_ID'

const initialState = {
    items: [
        {
            id: 1,
            order: 1,
            title: 'Доделать тестовое задание',
            description: 'Описание',
            finished: true,
            important: false,
            tags: {
                purple: true,
                green: true,
                red: true,
                orange: false
            },
            date: '14:34 / 28.09.2022'
        },
        {
            id: 2,
            order: 2,
            title: 'Добавление задания',
            description: 'Описание',
            finished: false,
            important: false,
            tags: {
                purple: true,
                green: true,
                red: true,
                orange: true
            },
            date: '14:46 / 28.09.2022'
        },
        {
            id: 3,
            order: 3,
            title: 'Реализовать поиск по задачам',
            description: 'Описание',
            finished: false,
            important: false,
            tags: {
                purple: true,
                green: true,
                red: true,
                orange: true
            },
            date: '14:46 / 28.09.2022'
        },
        {
            id: 4,
            order: 4,
            title: 'Разделить большие компоненты',
            description: 'Описание',
            finished: false,
            important: false,
            tags: {
                purple: true,
                green: true,
                red: true,
                orange: true
            },
            date: '14:46 / 28.09.2022'
        },
        {
            id: 5,
            order: 5,
            title: 'Сделать валидацию формы',
            description: 'Описание',
            finished: false,
            important: false,
            tags: {
                purple: true,
                green: true,
                red: true,
                orange: true
            },
            date: '14:46 / 28.09.2022'
        },
    ],
    deletedItems: [],
    finishedItems: [],
    importantItems: [],
    searchedItems: [],
    greenTag: false,
    purpleTag: false,
    redTag: false,
    orangeTag: false,
    phrase: '',
    editedTodo: {
        id: null,
        title: '',
        important: false,
        date: '',
        description: '',
        tags: {
            purple: false,
            green: false,
            red: false,
            orange: false
        },
    },
    todoFormIsOpen: false,
    isEditing: false,
    modalIsOpen: false,
    overlayIsOpened: false,
    deletingInProgressItemId: null,
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            //TODO: сделать автоматическое добавления id
            const id = state.items.length + 1;
            const order = state.items.length + 1;
            const { title, important, tags, date, description} = action.payload
            return {
                ...state,
                items: [...state.items, {
                    id,
                    order,
                    title,
                    finished: false,
                    important,
                    tags,
                    date,
                    description
                }]
            }
        case DELETE_TODO:
            const deletedItem = state.items.filter((item) => item.id === action.payload.id)
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload.id),
                deletedItems: [...state.deletedItems, ...deletedItem],
            }
        case SET_TAG_PURPLE:
            return {
                ...state,
                purpleTag: !state.purpleTag
            }
        case SET_TAG_GREEN:
            return {
                ...state,
                greenTag: !state.greenTag
            }
        case SET_TAG_ORANGE:
            return {
                ...state,
                orangeTag: !state.orangeTag
            }
        case SET_TAG_RED:
            return {
                ...state,
                redTag: !state.redTag
            }
        case SEARCH_TODO_IN_ALL:
            if(!action.term){
                return {
                    ...state,
                    searchedItems: []
                }
            }

            return {
                ...state,
                searchedItems: [...state.deletedItems, ...state.finishedItems, ...state.importantItems, ...state.items].filter((item) => item.title.toLowerCase().includes(action.term.toLowerCase()))
            }
        case SET_TODOS:
            return {
                ...state,
                items: [...action.todos]
            }
        case FINISH_TODO:
            return {
                ...state,
                items: state.items.map((item) => {
                    if(item.id === action.id){
                        return {...item, finished: !action.finished}
                    }
                    return item
                })
            }
        case REFRESH_TODO:
            const refreshedItem = state.deletedItems.filter((item) => item.id === action.id)


            return {
                ...state,
                items: [...state.items, ...refreshedItem],
                deletedItems: state.deletedItems.filter((item) => item.id !== action.id)
            }
        case SET_EDITED_TODO: {
            const {id, title, important, date, description, tags} = action
            return {
                ...state,
                editedTodo: {
                    id,
                    title,
                    important,
                    date,
                    description,
                    tags: {...tags}
                }
            }
        }
        case EDIT_TODO:

            return {
                ...state,
                items: state.items.map((item) => {
                    if(state.editedTodo.id === item.id){
                        return {
                            ...item,
                            title: action.title,
                            important: action.important,
                            date: action.date,
                            tags: {...action.tags},
                            description: action.description
                        }
                    }
                    return item
                })
            }
        case TOGGLE_TODO_FORM:
            return {
                ...state,
                todoFormIsOpen: !state.todoFormIsOpen
            }
        case SET_IS_EDITING:
            return {
                ...state,
                isEditing: action.isEditing
            }
        case TOGGLE_MODAL:
            return {
                ...state,
                modalIsOpen: action.isOpen
            }
        case TOGGLE_OVERLAY_IS_OPENING:
            return {
                ...state,
                overlayIsOpened: action.isOpen
            }
        case SET_DELETING_IN_PROGRESS_ITEM_ID:
            return {
                ...state,
                deletingInProgressItemId: action.id
            }
        default:
            return state
    }
}

export const addTodo = ( title, important, tags, date, description) =>
    ({type: ADD_TODO, payload: { title, important, tags, date, description}})

export const deleteTodo = (id) => ({type: DELETE_TODO, payload: {id}})

export const searchTodoInAll = (term) => ({type: SEARCH_TODO_IN_ALL, term})

export const setTodos = (todos) => ({type: SET_TODOS, todos})

export const finishTodo = (id, finished) => ({type: FINISH_TODO, id, finished})

export const refreshTodo = (id) => ({type: REFRESH_TODO, id})

export const editTodo = (title, important, tags, date, description) => ({type: EDIT_TODO, title, important, tags, date, description})

export const setEditedTodo = (id = null, title, important, date, description, tags) =>
    ({type: SET_EDITED_TODO, id, title, important, date, description, tags})

export const setDeletingInProgressItemId = (id) => ({type: SET_DELETING_IN_PROGRESS_ITEM_ID, id})

export const setGreenTag = () => ({type: SET_TAG_GREEN})
export const setOrangeTag = () => ({type: SET_TAG_ORANGE})
export const setRedTag = () => ({type: SET_TAG_RED})
export const setPurpleTag = () => ({type: SET_TAG_PURPLE})

export const toggleTodoForm = () => ({type: TOGGLE_TODO_FORM})

export const setIsEditing = (isEditing) => ({type: SET_IS_EDITING, isEditing})

export const toggleModalIsOpen = (isOpen) => ({type: TOGGLE_MODAL, isOpen})
export const toggleOverlayIsOpened = (isOpen) => ({type: TOGGLE_OVERLAY_IS_OPENING, isOpen})




