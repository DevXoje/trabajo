import Link from "../../components/atoms/Link";
// Link.stories.ts|tsx
import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
//import { Meta,Story } from "@storybook/react";
import { LinkProps } from "../../models/Link";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Atoms/Link",
  component: Link,
} as ComponentMeta<typeof Link>;
//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Link> = (args: LinkProps) => (
  <Link {...args} />
);

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { text: "Algo de texto", route: "" };

/*export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, label: "📚📕📈🤓" };*/
