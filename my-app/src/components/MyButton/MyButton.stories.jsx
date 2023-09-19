import {MyButton} from "./MyButton";
import {action} from "@storybook/addon-actions";
import {withKnobs,text,number} from "@storybook/addon-knobs";

export default{
    title: 'Components/MyButton',
    component: MyButton,
    parameters:{
        layout:'centered',
    },
    tags:['autodocs'],
    decoratore:[withKnobs],
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

export const withAddon=()=>{
   const name=text("name","james");
   const age=number("age","20");
   const content=`${name} ${age}`;
   return <MyButton onclick={action('button-click')} label={content}/>;
};
