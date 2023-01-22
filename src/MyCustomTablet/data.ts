const newRow = (t: any) => {
  return {
    [`${t('Grid.Rows.CallType')}`]: `${t('Grid.Columns.CallType')}`,
    [`${t('Grid.Rows.Start')}`]: `${t('Grid.Columns.Start')}`,
    [`${t('Grid.Rows.Client')}`]: `${t('Grid.Columns.Client')}`,
  }
}

export const rows = (t: any) => {
  return [newRow(t)];
}

type Column = {
  name: string;
  widthSize?: number;
}

const newColumn = (column: Column) => {
  return {
    field: column.name,
    cellClass: "children-cell",
    headerClass: "header-cell",
    width: column.widthSize || 120,
  };
}

export const columns = (t: any) => {
  return [
    newColumn({name: `${t('Grid.Rows.CallType')}`}),
    newColumn({name: `${t('Grid.Rows.Start')}`}),
    newColumn({name: `${t('Grid.Rows.Client')}`, widthSize: 170}),
  ]
}