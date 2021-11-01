export interface CategoryItemsType {
  title: string;
  loc: string;
  selected?: boolean;
}
export interface CategoryType {
  title: string;
  items: CategoryItemsType[];
  type: string;
  selected?: CategoryItemsType[];
}
