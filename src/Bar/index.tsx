import React, { type FC } from 'react';

export interface InfoProps {
  id?: string,
  name?: string;
  age?: number;
}

const infoDemo = {id: "111", name: "张三", age: 35};

const Bar: FC<{
  /**
   * @description 属性描述
   * @default "我是title"
   */
  title?: string,
  /**
   * @description 用户信息
   * @default '{id: "111", name: "张三", age: 35}'
   */
  info?: InfoProps
}> = ({title,info}) => <h4>{title}</h4>;

export default Bar;
