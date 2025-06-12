import { createContext, useReducer } from "react";

export const AuthContext = createContext(null)
export const AuthReducerContext = createContext(null)


function authReducer(state, action) {
    switch (action.type) {
        case true: {
            return action.token
        }

        case false: {
            return null
        }
    }
}

export default function AuthWrapper(props) {

    const [token, dispatch] = useReducer(authReducer, null)

    return (
        <AuthContext value={token}>
            <AuthReducerContext value={dispatch}>
                {props.children}
            </AuthReducerContext>
        </AuthContext>
    )
}
