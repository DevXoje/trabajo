import LinkList from "../../components/molecules/LinkList";
// LinkList.stories.ts|tsx
import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LinkProps } from "../../models/Link";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Molecules/LinkList",
  component: LinkList,
} as ComponentMeta<typeof LinkList>;
//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof LinkList> = (args) => (
  <LinkList {...args} />
);
const linkListPlaceHolder: LinkProps[] = [
  {
    text: "algo",
    route: "",
    icon: "",
  },
  {
    text: "mola",
    route: "",
    icon: "",
  },
  {
    text: "mucho",
    route: "",
    icon: "",
  },
];

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = { links: linkListPlaceHolder, orientation: "vertical" };

export const Horizontal = Template.bind({});
Horizontal.args = { ...Default.args, orientation: "horizontal" };

export const Vertical = Template.bind({});
Vertical.args = { ...Default.args, orientation: "vertical" };
