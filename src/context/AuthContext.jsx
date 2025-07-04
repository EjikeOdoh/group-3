import { createContext, useReducer } from "react";

export const AuthContext = createContext(null)
export const AuthReducerContext = createContext(null)


function authReducer(state, action) {
    switch (action.type) {
        case true: {
            return { ...state, 
                token: action.token, 
                account: action.acctType }
        }

        case false: {
            return {}
        }
    }
}

export default function AuthWrapper(props) {

    const [token, dispatch] = useReducer(authReducer, {})

    return (
        <AuthContext value={token}>
            <AuthReducerContext value={dispatch}>
                {props.children}
            </AuthReducerContext>
        </AuthContext>
    )
}
