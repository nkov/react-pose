import * as React from 'react';
import { DomPopmotionPoser } from 'popmotion-pose';
import { ChildRegistration, CurrentPose, PoseElementInternalProps, PopStyle } from './types';
export declare const PoseParentContext: React.Context<{}>;
declare type Ref = (ref: Element) => any;
declare type RefSetters = {
    ref?: Ref;
    innerRef?: Ref;
    hostRef?: Ref;
};
declare class PoseElement extends React.PureComponent<PoseElementInternalProps> {
    props: PoseElementInternalProps;
    poser: DomPopmotionPoser;
    ref: Element;
    styleProps: {
        [key: string]: any;
    };
    shouldForwardProp: (key: string) => boolean;
    children: Set<ChildRegistration>;
    popStyle?: PopStyle;
    completeCallbacks: any[];
    private childrenHandlers;
    constructor(props: PoseElementInternalProps);
    getInitialPose(): CurrentPose | void;
    getFirstPose(): CurrentPose | void;
    getSetProps(): {
        [key: string]: any;
        children?: any;
        withParent?: boolean;
    };
    getRefs: () => RefSetters;
    setRef: (ref: Element) => void;
    componentDidMount(): void;
    UNSAFE_componentWillUpdate({ pose, _pose }: PoseElementInternalProps): void;
    componentDidUpdate(prevProps: PoseElementInternalProps): void;
    componentWillUnmount(): void;
    initPoser(poser: DomPopmotionPoser): void;
    setPose(pose: CurrentPose): void;
    callCompleteCallbacks(pose: CurrentPose): void;
    flushChildren(): void;
    render(): JSX.Element;
}
export { PoseElement };
