export default {

    namespace: 'desktop',

    state: {
        diskList: [],
        msg: ""
    },

    subscriptions: {

    },

    effects: {
        *getDiskInfos({ payload }, { call, put }) {
            const response = yield call(
                fetch,
                'file-manager-system/computerSystemInfo/getDiskInfos',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                    },
                },
                put,
            );
            if (response && response.ok) {
                return response.json();
            }
        },
    },

    reducers: {
        showTestMsg(state, action) {
            const { msg } = action.payload;
            return { ...state, msg: msg }
        },
    },

};
