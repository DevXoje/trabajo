import Experience from "../../components/molecules/Experience";
// Experience.stories.ts|tsx
import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Molecules/Experience",
  component: Experience,
} as ComponentMeta<typeof Experience>;
//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Experience> = (args) => (
  <Experience {...args} />
);

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { backgroundColor: "#ff0", label: "Button" };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, label: "😄👍😍💯" };

export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, label: "📚📕📈🤓" };
