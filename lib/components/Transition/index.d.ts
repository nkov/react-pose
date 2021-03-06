import * as React from 'react';
import { Props, State } from './types';
declare class Transition extends React.Component<Props, State> {
    static defaultProps: {
        flipMove: boolean;
        enterAfterExit: boolean;
        preEnterPose: string;
        enterPose: string;
        exitPose: string;
    };
    static getDerivedStateFromProps: (props: Props, state: State) => {
        displayedChildren?: React.ReactElement<any>[];
        finishedLeaving?: {
            [key: string]: boolean;
        };
        hasInitialized: boolean;
        indexedChildren?: {
            [key: string]: React.ReactElement<any>;
        };
        scheduleChildRemoval?: (key: string) => void;
    };
    state: State;
    removeChild(key: string): void;
    shouldComponentUpdate(nextProps: Props, nextState: State): boolean;
    render(): React.ReactElement<any>[];
}
export default Transition;
