import React from 'react';
import { Input, Icon, Row, Col, Progress, message } from 'antd';
import style from './Disk.less';

/**
 * 左边显示图片右边显示标题加描述的控件（暂时用于类似我的电脑这种磁盘显示）
 */
class Disk extends React.Component {
    constructor() {
        super();
        this.state = {
            //默认背景颜色
            rowColBackground: '#FFFFFF',
            //默认图标
            defaultIcon: {
                defaultStyle: { fontSize: 50, color: '#08c' },
                defaultType: "desktop",
            },
            //默认右下角进度条
            defaultProgess: {
                defaultStrokeWidth: 15,
                debaultStrokeLinecap: "square",
                defaultShowInfo: false,
                defaultPercent: 30,
                defaultStyle: { color: '#E6E6E6', paddingRight: 10 }
            },
            //是否选中
            isClick: false,
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.rowColBackground) {
            this.setState({ rowColBackground: nextProps.rowColBackground });
        }
        if (nextProps.isClick) {
            this.setState({ isClick: nextProps.isClick })
        }
    }

    /**
     * 双击事件
     */
    onDoubleClick = () => {
        message.success("双击成功");
    }

    /**
     * 单机事件
     */
    onClick = () => {
        const { isClick } = this.state;
        if (isClick) {
            this.setState({
                rowColBackground: '#FFFFFF',
                isClick: false,
            })
        } else {
            this.setState({
                rowColBackground: '#E5F3FB',
                isClick: true,
            })
        }
    }

    /**
     * 鼠标移入
     */
    onMouseOver = () => {
        this.setState({ rowColBackground: '#E5F3FB' })
    }

    /**
     * 鼠标移出
     */
    onMouseOut = () => {
        const { isClick } = this.state;
        //没选中时移出则恢复背景颜色
        if (!isClick) {
            this.setState({ rowColBackground: '#FFFFFF' });
        }
    }
    /**
     * 要展示的图片
     */
    iconRender = () => {
        const { iconRender } = this.props;
        const { defaultStyle, defaultType } = this.state.defaultIcon;
        if (iconRender) {
            return (<Icon
                style={iconRender.style}
                type={iconRender.type}
            />)
        } else {
            return (<Icon
                style={defaultStyle}
                type={defaultType}
            />)
        }
    }

    /**
     * 右下角内容（暂时表示进度条）
     */
    progessRender = () => {
        const { progessRender } = this.props;
        const { defaultStrokeWidth, debaultStrokeLinecap, defaultShowInfo, defaultPercent, defaultStyle } = this.state.defaultProgess
        if (progessRender) {
            return (
                <Progress
                    strokeWidth={progessRender.defaultStrokeWidth}
                    strokeLinecap={progessRender.debaultStrokeLinecap}
                    showInfo={progessRender.defaultShowInfo}
                    percent={progessRender.defaultPercent}
                    style={progessRender.defaultStyle} />
            )
        } else {
            return (
                <Progress
                    strokeWidth={defaultStrokeWidth}
                    strokeLinecap={debaultStrokeLinecap}
                    showInfo={defaultShowInfo}
                    percent={defaultPercent}
                    style={defaultStyle} />
            )
        }
    }

    render() {
        const { onMouseOver, onMouseOut, className, labelText, onClick, onDoubleClick } = this.props;
        return (
            <div
                style={{ background: this.state.rowColBackground }}
                className={className ? className : style.content_wrapper}
                onMouseOver={onMouseOver ? onMouseOver : this.onMouseOver}
                onMouseOut={onMouseOut ? onMouseOut : this.onMouseOut}
                onClick={onClick ? onClick : this.onClick}
                onDoubleClick={onDoubleClick ? onDoubleClick : this.onDoubleClick}>
                {this.iconRender()}
                <div className={style.content_right_wrapper}>
                    <span>{labelText ? labelText : '内容描述'}</span>
                    {this.progessRender()}
                </div>
            </div>
        )
    }
}

export default Disk;