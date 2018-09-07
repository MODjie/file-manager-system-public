export default {

    namespace: 'desktop',

    state: {
        diskList: [],
        msg: ""
    },

    subscriptions: {

    },

    effects: {
        // 查询车辆信息
        *linkTest({ payload }, { call, put }) {
            const response = yield call(
                fetch,
                'file-manager-system/computerSystemInfo/test',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                    },
                },
                put,
            );
            if (response) {
                // const data = response.data;
                // debugger
                // yield put({
                //     type: 'showTestMsg',
                //     payload: {
                //         msg: "成功了"
                //     },
                // });
                return response
            } else {
                yield put({
                    type: 'showTestMsg',
                    payload: {
                        msg: "失败了~"
                    },
                });
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
