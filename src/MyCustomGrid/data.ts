type Row = {
  cid: string;
  'call type': string;
  'start at': string;
  'client name': string;
  brand: string;
  group: string;
  'sales status after': string;
  'caller agent': string;
  duration: string;
  'bill duration': string;
  hangup: string;
  'caller id': string;
  to: string;
}

const row: Row = {
  cid: '1234',
  'call type': 'Predicrive Calls',
  'start at': '22/11/23 12:23:23',
  'client name': 'Karter Martin',
  brand: 'Brand',
  group: 'Online Group',
  'sales status after': 'lead_status',
  'caller agent': 'Karter Martin',
  duration: '00:00:23',
  'bill duration': '00:00:23',
  hangup: 'Agent',
  'caller id': 'ID 123456',
  to: '45672371610',
};

export const rows: Row[] = [row, row, row, row];

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

export const columns = [
  newColumn({name: 'cid', widthSize: 70}),
  newColumn({name: 'call type'}),
  newColumn({name: 'start at'}),
  newColumn({name: 'client name', widthSize: 140}),
  newColumn({name: 'brand'}),
  newColumn({name: 'group'}),
  newColumn({name: 'sales status after', widthSize: 170}),
  newColumn({name: 'caller agent', widthSize: 140}),
  newColumn({name: 'duration'}),
  newColumn({name: 'bill duration', widthSize: 140}),
  newColumn({name: 'hangup'}),
  newColumn({name: 'caller id'}),
  newColumn({name: 'to'}),
]