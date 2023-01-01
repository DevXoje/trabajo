import Input from "../../components/atoms/Input";
// Input.stories.ts|tsx
import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Atoms/Input",
  component: Input,
} as ComponentMeta<typeof Input>;
//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = { backgroundColor: "#ff0", label: "Button" };

export const Text = Template.bind({});
Text.args = { backgroundColor: "#ff0", label: "Button" };

export const CheckBox = Template.bind({});
CheckBox.args = { ...Default.args, label: "😄👍😍💯" };

export const Email = Template.bind({});
Email.args = { ...Default.args, label: "📚📕📈🤓" };
export const Password = Template.bind({});
Password.args = { ...Default.args, label: "📚📕📈🤓" };

export const Search = Template.bind({});
Search.args = { ...Default.args, label: "📚📕📈🤓" };

export const Submit = Template.bind({});
Submit.args = { ...Default.args, label: "📚📕📈🤓" };
