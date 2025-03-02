import React from "react";
import { Card, Table } from "../components";

const sampleData = [
  {
    id: 1,
    name: "Goblin Sword",
    type: "Weapon",
    damage: 15,
    price: 100,
    rarity: "Common",
  },
  {
    id: 2,
    name: "Health Potion",
    type: "Consumable",
    damage: 0,
    price: 50,
    rarity: "Common",
  },
  {
    id: 3,
    name: "Magic Staff",
    type: "Weapon",
    damage: 20,
    price: 200,
    rarity: "Rare",
  },
  {
    id: 4,
    name: "Dragon Shield",
    type: "Armor",
    damage: 0,
    price: 150,
    rarity: "Rare",
  },
  {
    id: 5,
    name: "Dragon Scale",
    type: "Material",
    damage: 0,
    price: 300,
    rarity: "Epic",
  },
  {
    id: 6,
    name: "Enchanted Bow",
    type: "Weapon",
    damage: 18,
    price: 180,
    rarity: "Rare",
  },
  {
    id: 7,
    name: "Mana Crystal",
    type: "Material",
    damage: 0,
    price: 120,
    rarity: "Uncommon",
  },
  {
    id: 8,
    name: "Phoenix Feather",
    type: "Material",
    damage: 0,
    price: 250,
    rarity: "Epic",
  },
];

const columns: Array<{
  key: keyof (typeof sampleData)[0];
  title: string;
  sortable?: boolean;
  render?: (
    value: (typeof sampleData)[0][keyof (typeof sampleData)[0]],
    record: (typeof sampleData)[0]
  ) => React.ReactNode;
}> = [
  { key: "name", title: "Item Name", sortable: true },
  {
    key: "rarity",
    title: "Rarity",
    sortable: true,
    render: (value: string | number) => (
      <span
        className={`
        ${value === "Common" ? "text-pixel-gray" : ""}
        ${value === "Uncommon" ? "text-pixel-green" : ""}
        ${value === "Rare" ? "text-pixel-blue" : ""}
        ${value === "Epic" ? "text-pixel-purple" : ""}
      `}
      >
        {value}
      </span>
    ),
  },
  { key: "type", title: "Type", sortable: true },
  {
    key: "damage",
    title: "Damage",
    sortable: true,
    //@ts-expect-error expected error
    render: (value: number) => (
      <span
        className={
          typeof value === "number" && value > 0
            ? "text-pixel-red"
            : "text-pixel-gray"
        }
      >
        {value > 0 ? `${value}` : "-"}
      </span>
    ),
  },
  {
    key: "price",
    title: "Price",
    sortable: true,
    //@ts-expect-error expected error
    render: (value: number) => (
      <span className="text-pixel-gold">{value} gold</span>
    ),
  },
];

const TablePage: React.FC = () => {
  // Preview section state
  const [previewCurrentPage, setPreviewCurrentPage] = React.useState(1);
  const [previewSortedData, setPreviewSortedData] = React.useState(sampleData);

  // Features section - Sorting example state
  const [sortingExampleData, setSortingExampleData] = React.useState(
    sampleData.slice(0, 3)
  );

  // Features section - Custom rendering example state
  const [renderingExampleData, setRenderingExampleData] = React.useState(
    sampleData.slice(0, 3)
  );

  // Variants section state
  const [basicTableData, setBasicTableData] = React.useState(
    sampleData.slice(0, 3)
  );
  const [stripedTableData, setStripedTableData] = React.useState(
    sampleData.slice(0, 3)
  );

  const handleBasicTableSort = (
    key: keyof (typeof sampleData)[0],
    direction: "asc" | "desc"
  ) => {
    const sorted = [...basicTableData].sort((a, b) => {
      const aValue = a[key];
      const bValue = b[key];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return direction === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return direction === "asc" ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });
    setBasicTableData(sorted);
  };

  const handleStripedTableSort = (
    key: keyof (typeof sampleData)[0],
    direction: "asc" | "desc"
  ) => {
    const sorted = [...stripedTableData].sort((a, b) => {
      const aValue = a[key];
      const bValue = b[key];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return direction === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return direction === "asc" ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });
    setStripedTableData(sorted);
  };

  const handlePreviewSort = (
    key: keyof (typeof sampleData)[0],
    direction: "asc" | "desc"
  ) => {
    const sorted = [...previewSortedData].sort((a, b) => {
      const aValue = a[key];
      const bValue = b[key];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return direction === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return direction === "asc" ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });
    setPreviewSortedData(sorted);
  };

  const handleSortingExampleSort = (
    key: keyof (typeof sampleData)[0],
    direction: "asc" | "desc"
  ) => {
    const sorted = [...sortingExampleData].sort((a, b) => {
      const aValue = a[key];
      const bValue = b[key];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return direction === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return direction === "asc" ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });
    setSortingExampleData(sorted);
  };

  const handleRenderingExampleSort = (
    key: keyof (typeof sampleData)[0],
    direction: "asc" | "desc"
  ) => {
    const sorted = [...renderingExampleData].sort((a, b) => {
      const aValue = a[key];
      const bValue = b[key];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return direction === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return direction === "asc" ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });
    setRenderingExampleData(sorted);
  };

  return (
    <div className="min-h-screen bg-pixel-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-pixel text-pixel-black">Table</h1>
          <p className="font-retro text-pixel-gray">
            A pixel-styled table component with sorting, pagination, and
            customizable rendering features.
          </p>
        </div>

        {/* Preview */}
        <Card className="mb-8">
          <div className="p-8 border-b border-pixel-darkGray">
            <Table
              data={previewSortedData}
              columns={columns}
              currentPage={previewCurrentPage}
              pageSize={5}
              onPageChange={setPreviewCurrentPage}
              onSort={handlePreviewSort}
              striped
              hoverable
            />
          </div>
          <div className="p-4 bg-pixel-black/5">
            <pre className="font-retro text-sm overflow-x-auto p-4">
              <code className="text-pixel-black">{`<Table
  data={data}
  columns={columns}
  currentPage={currentPage}
  pageSize={5}
  onPageChange={setCurrentPage}
  onSort={handleSort}
  striped
  hoverable
/>`}</code>
            </pre>
          </div>
        </Card>

        {/* Features */}
        <section className="space-y-4">
          <h2 className="text-2xl font-pixel text-pixel-black">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <div className="p-6">
                <h3 className="text-xl font-pixel mb-4">Sorting</h3>
                <p className="font-retro text-sm mb-4">
                  Click on column headers to sort the data. The table supports
                  both ascending and descending order.
                </p>
                <Table
                  data={sortingExampleData}
                  columns={columns.filter((col) =>
                    ["name", "price"].includes(col.key)
                  )}
                  onSort={handleSortingExampleSort}
                />
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <h3 className="text-xl font-pixel mb-4">Custom Rendering</h3>
                <p className="font-retro text-sm mb-4">
                  Customize cell rendering with different styles and formats.
                </p>
                <Table
                  data={renderingExampleData}
                  columns={columns.filter((col) =>
                    ["rarity", "damage"].includes(col.key)
                  )}
                  onSort={handleRenderingExampleSort}
                />
              </div>
            </Card>
          </div>
        </section>

        {/* Variants */}
        <section className="space-y-4">
          <h2 className="text-2xl font-pixel text-pixel-black">Variants</h2>
          <Card>
            <div className="space-y-6 p-6">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-pixel mb-4">Basic Table</h3>
                  <Table
                    data={basicTableData}
                    columns={columns}
                    onSort={handleBasicTableSort}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-pixel mb-4">Striped Rows</h3>
                  <Table
                    data={stripedTableData}
                    columns={columns}
                    onSort={handleStripedTableSort}
                    striped
                  />
                </div>
              </div>
              <pre className="font-retro text-sm bg-pixel-black/5 p-4 rounded">
                <code>{`// Basic Table
<Table data={data} columns={columns} />

// Striped Table
<Table
  data={data}
  columns={columns}
  striped
/>`}</code>
              </pre>
            </div>
          </Card>
        </section>

        {/* API Reference */}
        <section className="space-y-4">
          <h2 className="text-2xl font-pixel text-pixel-black">
            API Reference
          </h2>
          <Card>
            <div className="p-6">
              <table className="w-full font-retro text-sm">
                <thead>
                  <tr className="border-b-2 border-pixel-darkGray">
                    <th className="text-left py-2">Prop</th>
                    <th className="text-left py-2">Type</th>
                    <th className="text-left py-2">Default</th>
                    <th className="text-left py-2">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-pixel-darkGray/20">
                  <tr>
                    <td className="py-3 text-pixel-blue">data</td>
                    <td>{"Record<string, any>[]"}</td>
                    <td>required</td>
                    <td>Array of data to be displayed</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">columns</td>
                    <td>ColumnConfig[]</td>
                    <td>required</td>
                    <td>Table column configurations</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">striped</td>
                    <td>boolean</td>
                    <td>false</td>
                    <td>Enable striped rows</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">hoverable</td>
                    <td>boolean</td>
                    <td>true</td>
                    <td>Enable hover effect on rows</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">currentPage</td>
                    <td>number</td>
                    <td>1</td>
                    <td>Current page for pagination</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">pageSize</td>
                    <td>number</td>
                    <td>10</td>
                    <td>Number of items per page</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">onPageChange</td>
                    <td>{"(page: number) => void"}</td>
                    <td>undefined</td>
                    <td>Callback when page changes</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">onSort</td>
                    <td>
                      {"(key: string, direction: 'asc' | 'desc') => void"}
                    </td>
                    <td>undefined</td>
                    <td>Callback when sorting changes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default TablePage;
