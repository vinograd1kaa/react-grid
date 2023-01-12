const newRow = (t: any) => {
  return {
    [`${t('Grid.Rows.Cid')}`]: `${t('Grid.Columns.Cid')}`,
    [`${t('Grid.Rows.CallType')}`]: `${t('Grid.Columns.CallType')}`,
    [`${t('Grid.Rows.Start')}`]: `${t('Grid.Columns.Start')}`,
    [`${t('Grid.Rows.Client')}`]: `${t('Grid.Columns.Client')}`,
    [`${t('Grid.Rows.Brand')}`]: `${t('Grid.Columns.Brand')}`,
    [`${t('Grid.Rows.Group')}`]: `${t('Grid.Columns.Group')}`,
    [`${t('Grid.Rows.Sales')}`]: `${t('Grid.Columns.Sales')}`,
    [`${t('Grid.Rows.CallerAgent')}`]: `${t('Grid.Columns.CallerAgent')}`,
    [`${t('Grid.Rows.Duration')}`]: `${t('Grid.Columns.Duration')}`,
    [`${t('Grid.Rows.BillDuration')}`]: `${t('Grid.Columns.BillDuration')}`,
    [`${t('Grid.Rows.Hangup')}`]: `${t('Grid.Columns.Hangup')}`,
    [`${t('Grid.Rows.CallerId')}`]: `${t('Grid.Columns.CallerId')}`,
    [`${t('Grid.Rows.To')}`]: `${t('Grid.Columns.To')}`
  }
}

export const rows = (t: any) => {
  return [newRow(t), newRow(t), newRow(t), newRow(t)];
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
    width: column.widthSize || 120
  };
}

export const columns = (t: any) => {
  return [
    newColumn({name: `${t('Grid.Rows.Cid')}`, widthSize: 70}),
    newColumn({name: `${t('Grid.Rows.CallType')}`}),
    newColumn({name: `${t('Grid.Rows.Start')}`}),
    newColumn({name: `${t('Grid.Rows.Client')}`, widthSize: 140}),
    newColumn({name: `${t('Grid.Rows.Brand')}`}),
    newColumn({name: `${t('Grid.Rows.Group')}`}),
    newColumn({name: `${t('Grid.Rows.Sales')}`, widthSize: 170}),
    newColumn({name: `${t('Grid.Rows.CallerAgent')}`, widthSize: 140}),
    newColumn({name: `${t('Grid.Rows.Duration')}`}),
    newColumn({name: `${t('Grid.Rows.BillDuration')}`, widthSize: 140}),
    newColumn({name: `${t('Grid.Rows.Hangup')}`}),
    newColumn({name: `${t('Grid.Rows.CallerId')}`}),
    newColumn({name: `${t('Grid.Rows.To')}`})
  ]
}