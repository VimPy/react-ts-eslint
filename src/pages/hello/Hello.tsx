import * as React from 'react';

export interface Props {
    name: string;
    enthusiasmLevel?: number; //加?为指定可选参数
}

// 定义Hello组件
function Hello({ name, enthusiasmLevel = 1 }: Props) {
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic, :D');
    }
    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
        </div>
    );
}
/*
// 定义Hello组件的另一种方式。当组件具有某些状态的时候，推荐使用类的方式定义组件。
class Hello extends React.Component<Props, object> { //把状态指定为了object类型
    render() {
        const {name, enthusiasmLevel=1} = this.props;
        if(enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic, :D');
        }
        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + getExclamationMarks(enthusiasmLevel)}
                </div>
            </div>
        );
    }
}
*/
export default Hello;

// helpers
function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join("!");
}
