import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Input, Icon, Row, Col, Progress, message } from 'antd';
import styles from './Desktop.less';
import Disk from '../../components/Disk/Disk';

const Search = Input.Search;

const diskListSource = [
    { name: "本地磁盘(C:)", isClick: false },
    { name: "本地磁盘(D:)", isClick: false },
    { name: "本地磁盘(E:)", isClick: false },
    { name: "本地磁盘(F:)", isClick: false },
    { name: "本地磁盘(G:)", isClick: false },
];

class Desktop extends React.Component {
    constructor() {
        super();
        this.state = {
            diskList: [],
        }
    }

    onSearch = value => {
        console.log(value)
    }

    componentWillMount() {
        this.setState({ diskList: diskListSource });
        this.linkTest();
    }

    linkTest = () => {
        this.props.dispatch({
            type: 'desktop/linkTest',
        }).then((response) => {
            const msg = this.props.msg;
            debugger
            if (msg) {
                message.success(msg);
            } else {
                message.error("连接失败");
            }
        });
    }

    onClick(e, index, diskList) {
        diskList.map((disk, num) => {
            if (index == num) {
                disk.isClick = true;
            } else {
                disk.isClick = false;
            }
        });
        this.setState({ diskList: diskList });
    }

    /**
     * 生成磁盘控件
     */
    renderDisk = (diskList) => {
        const renderDisk = [];
        diskList.map((disk, index) => {
            renderDisk.push((<Col span={6} style={{ marginTop: 28 }}>
                <Disk labelText={disk.name} onClick={(e) => { this.onClick(e, index, diskList) }} isClick={disk.isClick} />
            </Col>));
        })
        return renderDisk;
    }

    render() {
        return (
            <div style={{ paddingTop: 18, paddingLeft: 20 }}>
                <Search
                    placeholder="我的电脑"
                    onSearch={this.onSearch}
                    style={{ width: '90%' }}
                />
                <div>
                    <Row>
                        {this.renderDisk(this.state.diskList)}
                    </Row>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    const { msg } = state.desktop;
    return state.desktop

}

export default connect(mapStateToProps)(Desktop);