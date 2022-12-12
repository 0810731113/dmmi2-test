import React, { type FC } from 'react';

const Comp: FC<{ title: string }> = (props) => <>{props.title}</>;

// export default Comp;

export default (props) => <>{props.title}</>
