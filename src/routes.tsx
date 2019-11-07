import * as React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Hello from './pages/hello/Hello';

const Routes: React.SFC = () => (// 无状态组件
    /*exact表示严格匹配,匹配到当前路由不再向下匹配*/
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Hello} />
            <Route component={() => <div>Not Found</div>} />
        </Switch>
    </HashRouter>
)

export default Routes;