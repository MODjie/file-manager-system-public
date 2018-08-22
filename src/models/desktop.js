// export default {

    namespace: 'desktop',

    state: {
        //   foo:'open',
    },

    subscriptions: {

    },

    effects: {

        // 查询车辆信息
        *test({ payload }, { call, put }) {
            const response = yield call(
                fetch,
                'file-manager-system/computerSystemInfo/test',
                {
                    method: 'POST',
                },
                put,
            );

            if (response) {
                yield put({
                    type: 'showTestMsg',
                    payload: {
                        msg: response
                    },
                });
            }
        },
    },

    reducers: {
        showTestMsg(state, action) {
            const { msg } = action.payload;
            return msg
        },
    },

};
