import {Input} from "./Input"

export default{
    title: 'Components/Input',
    component: Input,
    parameters:{
        layout:'centered',
    },
    tags:['autodocs'],
};


export const Small={
    args:{
        size: "small",
        type: 'text',
        placeholder:"Small",
        label:"Small label"
    },
};
export const Medium={
    args:{
        size: "medium",
        type: 'email',
        placeholder:"Medium",
        label:"Medium label"

    },
};
export const Large={
    args:{
        size: "large",
        type: 'password',
        placeholder:"Large",
        label:"Large label"
    },
};
