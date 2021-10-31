export interface CategoryItemsType {
  title: string;
  loc: string;
  seleted?: boolean;
}
export interface CategoryType {
  title: string;
  items: CategoryItemsType[];
  type: string;
  include?: string[];
}
