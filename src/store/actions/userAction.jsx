export const ACTION_USERINFO_SET = "[userinfo] SET";
export const ACTION_USERINFO_REMOVE = "[userinfo] REMOVE";

export const userinfoSetAction = (user, token)  => ({
    type: ACTION_USERINFO_SET,
    payload: user,
    token: token
})

export const userinfoRemoveAction = () => ({
    type: ACTION_USERINFO_REMOVE
})