import {MyButton} from "./MyButton"

export default{
    title: 'Components/MyButton',
    component: MyButton,
    parameters:{
        layout:'centered',
    },
    tags:['autodocs'],
};

export const Primary={
    args:{
        primary: true,
        text: 'Cliked',
    },
};

export const Secondary={
    args:{
        primary: false,
        text: 'secondary',
    },
};

export const Small={
    args:{
        size:"small",
        text: 'Small',
    },
};
export const Medium={
    args:{
        
        text: 'Medium',
    },
};
export const Large={
    args:{
        
        text: 'Large',
    },
};
