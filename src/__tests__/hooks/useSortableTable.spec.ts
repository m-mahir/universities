import { useSortableTable } from "../../core/hooks/useSortableTable";

describe("useSortableTable", () => {
  it("sorts data by a string field in ascending order", () => {
    const data = [
      { name: "Alice", age: "25" },
      { name: "Bob", age: "22" },
      { name: "Charlie", age: "28" },
    ];
    const { handleSorting } = useSortableTable(data);
    const sorted = handleSorting("name", "asc");
    expect(sorted?.map((item) => item.name)).toEqual([
      "Alice",
      "Bob",
      "Charlie",
    ]);
  });

  it("sorts data by a string field in descending order", () => {
    const data = [
      { name: "Alice", age: "25" },
      { name: "Bob", age: "22" },
      { name: "Charlie", age: "28" },
    ];
    const { handleSorting } = useSortableTable(data);
    const sorted = handleSorting("name", "desc");
    expect(sorted?.map((item) => item.name)).toEqual([
      "Charlie",
      "Bob",
      "Alice",
    ]);
  });

  it("handles empty values correctly", () => {
    const data = [
      { name: "Alice", age: "25" },
      { name: "Charlie", age: "" },
    ];
    const { handleSorting } = useSortableTable(data);
    const sortedByAge = handleSorting("age", "asc");
    expect(sortedByAge?.map((item) => item.name)).toEqual(["Charlie", "Alice"]);
  });

  it("returns an empty array when data is empty", () => {
    const data: { [key: string]: string | string[] }[] = [];
    const { handleSorting } = useSortableTable(data);
    const sorted = handleSorting("name", "asc");
    expect(sorted).toEqual([]);
  });

  it("does not mutate the original data", () => {
    const data = [
      { name: "Alice", age: "25" },
      { name: "Bob", age: "22" },
      { name: "Charlie", age: "28" },
    ];
    const { handleSorting } = useSortableTable(data);
    handleSorting("name", "asc");
    expect(data).toEqual([
      { name: "Alice", age: "25" },
      { name: "Bob", age: "22" },
      { name: "Charlie", age: "28" },
    ]);
  });
});
