export const ACTION_USERINFO_GET = "[userinfo] GET";
export const ACTION_USERINFO_SET = "[userinfo] SET";
export const ACTION_USERINFO_REMOVE = "[userinfo] REMOVE";

export const userinfoGetAction = (id) => ({
    type: ACTION_USERINFO_GET,
    payload: id
})

export const userinfoSetAction = (user)  => ({
    type: ACTION_USERINFO_SET
})

export const userinfoRemoveAction = () => ({
    type: ACTION_USERINFO_REMOVE
})