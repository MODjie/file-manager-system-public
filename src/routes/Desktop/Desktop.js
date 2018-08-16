import React from 'react';
import { Input, Icon, Row, Col, Progress } from 'antd';
import styles from './Desktop.less';
import Disk from '../../components/Disk/Disk';

const Search = Input.Search;

class Desktop extends React.Component {
    constructor() {
        super();
        this.state = {
            rowColBackground: '#FFFFFF',
        }
    }
    onSearch = value => {
        console.log(value)
    }

    diskOnClik = (e) => {
        debugger
    }

    render() {
        return (
            <div style={{ paddingTop: 18, paddingLeft: 20 }}>
                <Search
                    placeholder="我的电脑"
                    onSearch={this.onSearch}
                    style={{ width: 600 }}
                />
                <div className={styles.wrapper}>
                    <Row>
                        <Col span={6} >
                            <Disk labelText="本地磁盘(C:)" onClick={this.diskOnClik} />
                        </Col>
                        <Col span={6} >
                            <Disk labelText="本地磁盘(D:)" onClick={this.diskOnClik} />
                        </Col>
                        <Col span={6} >
                            <Disk labelText="本地磁盘(E:)" onClick={this.diskOnClik} />
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Desktop