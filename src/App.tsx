import { InputField } from "./components/InputField/InputField";
import { DataTable } from "./components/DataTable/DataTable";

function App() {
  const sampleData = [
    { id: 1, name: "Priyanshu", email: "priyanshu@example.com" },
    { id: 2, name: "Aman", email: "aman@example.com" },
    { id: 3, name: "Riya", email: "riya@example.com" },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Assignment Demo </h1>

      {/* InputField demo */}
      <InputField
        label="Username"
        placeholder="Enter your username"
        helperText="This is a helper text"
      />

      {/* DataTable demo */}
      <DataTable
        data={sampleData}
        columns={[
          { key: "name", header: "Name" },
          { key: "email", header: "Email" },
        ]}
        selectable
      />
    </div>
  );
}

export default App;
