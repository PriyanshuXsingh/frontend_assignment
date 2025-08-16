import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./DataTable";

interface User {
  id: number;
  name: string;
  email: string;
}

const sampleData: User[] = [
  { id: 1, name: "Priyanshu", email: "priyanshu@gmail.com" },
  { id: 2, name: "Aman", email: "aman@gmail.com" },
  { id: 3, name: "Riya", email: "riya@gmail.com" },
];

const meta: Meta<typeof DataTable<User>> = {
  title: "Components/DataTable",
  component: DataTable<User>,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DataTable<User>>;

export const Default: Story = {
  args: {
    data: sampleData,
    columns: [
      { key: "name", header: "Name" },
      { key: "email", header: "Email" },
    ],
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns: [
      { key: "name", header: "Name" },
      { key: "email", header: "Email" },
    ],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns: [
      { key: "name", header: "Name" },
      { key: "email", header: "Email" },
    ],
  },
};

export const Selectable: Story = {
  args: {
    data: sampleData,
    columns: [
      { key: "name", header: "Name" },
      { key: "email", header: "Email" },
    ],
    selectable: true,
  },
};

