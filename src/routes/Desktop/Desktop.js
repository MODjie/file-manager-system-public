import React from 'react';
import { Input, Icon, Row, Col, Progress } from 'antd';
import styles from './Desktop.less';
import Disk from '../../components/Disk/Disk';

const Search = Input.Search;

class Desktop extends React.Component {
    constructor() {
        super();
        this.state = {
            isClick1: false,
            isClick2: false,
            isClick3: false,
        }
    }

    onSearch = value => {
        console.log(value)
    }

    onClick1 = () => {
        const { isClick1 } = this.state;
        if(!isClick1){
            this.setState({
                isClick1:true,
                isClick2:false,
                isClick3:false,
            })
        }else{
            this.setState({isClick1:false});
        }
    }

    onClick2 = () => {
        const { isClick2 } = this.state;
        if(!isClick2){
            this.setState({
                isClick1:false,
                isClick2:true,
                isClick3:false,
            })
        }else{
            this.setState({isClick2:false});
        }
    }

    onClick3 = () => {
        const { isClick3 } = this.state;
        if(!isClick3){
            this.setState({
                isClick1:false,
                isClick2:false,
                isClick3:true,
            })
        }else{
            this.setState({isClick3:false});
        }
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
                            <Disk labelText="本地磁盘(C:)" onClick={this.onClick1} isClick={this.state.isClick1}/>
                        </Col>
                        <Col span={6} >
                            <Disk labelText="本地磁盘(D:)"  onClick={this.onClick2} isClick={this.state.isClick2}/>
                        </Col>
                        <Col span={6} >
                            <Disk labelText="本地磁盘(E:)"  onClick={this.onClick3} isClick={this.state.isClick3}/>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Desktop