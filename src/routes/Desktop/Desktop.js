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
        // this.setState({ diskList: diskListSource });
        this.getDiskInfos();
    }

    getDiskInfos = () => {
        this.props.dispatch({
            type: 'desktop/getDiskInfos',
        }).then((response) => {
            if (response && response.data) {
                const diskList = response.data;
                diskList.map(info => {
                    info.isClick = false;
                })
                this.setState({ diskList: diskList })
            } else {
                message.error("操作异常");
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
                <Disk
                    labelText={disk.diskName}
                    onClick={(e) => { this.onClick(e, index, diskList) }}
                    isClick={disk.isClick}
                    percent={disk.usePercent} />
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