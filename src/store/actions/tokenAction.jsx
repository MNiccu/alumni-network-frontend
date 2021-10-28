export const ACTION_TOKEN_SET = "[token] SET"
export const ACTION_TOKEN_INIT = "[token] INIT"
export const ACTION_TOKEN_REMOVE = "[token] REMOVE"

export const tokenSetAction = (token) => ({
    type: ACTION_TOKEN_SET,
    payload: token
})

export const tokenInitAction = () => ({
    type: ACTION_TOKEN_INIT
})

export const tokenRemoveAction = () => ({
    type: ACTION_TOKEN_REMOVE
})