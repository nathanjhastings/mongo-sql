var queryTypes = require('../lib/query-types');

queryTypes.add(
  'select'
, '{with} select {columns} from {table} {tables} {join} {innerJoin} {leftJoin} {leftOuterJoin} {fullOuterJoin} {crossOuterJoin} {where} {order} {limit} {offset} {groupBy}'
);

queryTypes.add(
  'insert'
, '{with} insert into {table} {values} {returning}'
);

queryTypes.add(
  'update'
, '{with} update {table} {updates} {where} {returning}'
);

queryTypes.add(
  'delete'
, '{with} delete from {table} {where} {returning}'
);

queryTypes.add(
  'remove'
, '{with} delete from {table} {where} {returning}'
);

queryTypes.add(
  'create-table'
, '{with} create table {ifNotExists} {table} ({definition})'
);

queryTypes.add(
  'drop-table'
, '{with} drop table {ifExists} {table} {cascade}'
);