import { ComponentMeta, ComponentStory } from '@storybook/react';
import MyLabel from "../../components/MyLabel";

export default {
    title: "UI/MyLabel",
    component: MyLabel,
    argTypes: {
        size: {
            control: 'select',
            options: ["normal", "h1"]
        },
        color: {
            control: 'select',
            options: ["primary", "secondary", "tertiary"]
        },
        fontColor: { control: 'color' },
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basic = Template.bind({});
Basic.args = {
    label: "General Kenobi",
    size: 'normal',
    allCaps: false
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    label: "Hello There!",
    size: 'normal',
    allCaps: true
}

export const Secondary = Template.bind({});
Secondary.args = {
    label: "Es hora de divertirnos",
    size: "normal",
    color: "secondary"
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    label: "Yo soy tu padre",
    size: "normal",
    color: "tertiary"
}

export const CustomColor = Template.bind({});
CustomColor.args = {
    fontColor: "#DEDEDE"
}
