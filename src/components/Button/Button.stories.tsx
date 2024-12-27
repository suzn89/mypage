import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from './Button.component';

export default {
  title: 'Components/Button', // Storybook에서 표시될 경로
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    onClick: { action: 'clicked' },
  },
} as Meta<typeof Button>;

// 기본 템플릿 생성
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

// Default Button
export const Default = Template.bind({});
Default.args = {
  children: 'Default Button',
  variant: 'primary',
  size: 'medium',
  disabled: false,
};

// Primary Button
export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  variant: 'primary',
};

// Secondary Button
export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
  variant: 'secondary',
};

// Disabled Button
export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  disabled: true,
};
