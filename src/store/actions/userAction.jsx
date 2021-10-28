export const ACTION_USER_SET = "[user] SET";
export const ACTION_USER_REMOVE = "[user] REMOVE";

export const userSetAction = (user)  => ({
    type: ACTION_USER_SET,
    payload: user
})

export const userRemoveAction = () => ({
    type: ACTION_USER_REMOVE
})