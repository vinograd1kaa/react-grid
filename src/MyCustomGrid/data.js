const row = {
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

export const rows = [row, row, row, row];

const newColumn = (name, widthSize = 120) => {
  return { field: name, cellClass: "children-cell", headerClass: "header-cell", width: widthSize };
}

export const columns = [
  newColumn('cid', 70),
  newColumn('call type'),
  newColumn('start at'),
  newColumn('client name', 140),
  newColumn('brand'),
  newColumn('group'),
  newColumn('sales status after', 170),
  newColumn('caller agent', 140),
  newColumn('duration'),
  newColumn('bill duration', 140),
  newColumn('hangup'),
  newColumn('caller id'),
  newColumn('to'),
]