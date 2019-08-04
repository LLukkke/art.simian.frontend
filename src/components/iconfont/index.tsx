import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.less';

interface IProps {
  name: string;
  size: number;
}

export default class Iconfont extends Component<IProps> {
  render() {
    const { name, size } = this.props;
    return (
      <View
        className={`icon icon-${name}`}
        style={{ fontSize: `${size}px`, color: '#3e57c3' }}
      />
    );
  }
}