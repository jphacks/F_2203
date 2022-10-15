import type { User } from "firebase/auth"

export type Action =
    | { type: "login"; payload: { user: User } }
    | { type: "logout"; payload: { user: User } }

const initialState = null

const reducer = (state: User | null, action: Action) => {
    switch (action.type) {
        case "login":
            return action.payload.user
        case "logout":
            return initialState
        default:
            return state
    }
}

export default {
    initialState,
    reducer,
}