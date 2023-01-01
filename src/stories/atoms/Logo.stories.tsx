import Logo from "../../components/atoms/Logo";
// Logo.stories.ts|tsx
import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Atoms/Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;
//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { backgroundColor: "#ff0", label: "Button" };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, label: "😄👍😍💯" };

export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, label: "📚📕📈🤓" };
