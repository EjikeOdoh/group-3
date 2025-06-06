import { createContext, useReducer } from "react";

export const AuthContext = createContext(null)
export const AuthReducerContext = createContext(null)


function authReducer(state, action) {
    switch (action.type) {
        case true: {
            return true
        }

        case false: {
            return false
        }
    }
}

export default function AuthWrapper(props) {

    const [isLoggedIn, dispatch] = useReducer(authReducer, false)

    return (
        <AuthContext value={isLoggedIn}>
            <AuthReducerContext value={dispatch}>
                {props.children}
            </AuthReducerContext>
        </AuthContext>
    )
}
