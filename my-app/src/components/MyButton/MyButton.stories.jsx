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
        text: 'Primary',
    },
};
