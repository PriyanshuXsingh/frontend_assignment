import type { Meta, StoryObj } from "@storybook/react";
import { InputField} from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text", description: "Input value" },
    onChange: { action: "changed", description: "Change handler" },
    label: { control: "text", description: "Label text" },
    placeholder: { control: "text", description: "Placeholder text" },
    helperText: { control: "text", description: "Helper message below input" },
    errorMessage: { control: "text", description: "Error message when invalid" },
    disabled: { control: "boolean", description: "Disable input" },
    invalid: { control: "boolean", description: "Mark input as invalid" },
    variant: { 
      control: { type: "select" }, 
      options: ["filled", "outlined", "ghost"], 
      description: "Visual style of the input" 
    },
    size: { 
      control: { type: "select" }, 
      options: ["sm", "md", "lg"], 
      description: "Size of the input" 
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    helperText: "Helper text here",
  },
};

export const ErrorState: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    invalid: true,
    errorMessage: "Invalid email",
  },
};

export const Disabled: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    disabled: true,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <InputField label="Filled" variant="filled" placeholder="Filled input" />
      <InputField label="Outlined" variant="outlined" placeholder="Outlined input" />
      <InputField label="Ghost" variant="ghost" placeholder="Ghost input" />
    </div>
  ),
};
