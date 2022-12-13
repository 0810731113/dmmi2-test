import React, { type FC } from 'react';

const Comp: FC<{ title: string }> = (props: any) => <>{props.title}</>;

export default Comp;

// export default (props:any) => <>{props.title}</>
