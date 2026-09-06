import assert from 'node:assert/strict';
import { test } from 'node:test';
import { sampleRows, processRows } from '../lib/demo-data.ts';
test('quarantines duplicate and null rows, normalizes casing and produces correct totals', () => {
 const result=processRows(sampleRows);
 assert.equal(result.accepted.length,6);
 assert.deepEqual(result.issues.map(i=>i.reason),['Duplicate ID','Missing or invalid amount']);
 assert.deepEqual(result.totals,{north:430,west:400,south:180,east:220});
 assert.equal(sampleRows[1].region,' West ');
});
test('repair changes only the relevant regional total and accepts seven rows', () => {
 const repaired=sampleRows.filter((_,i)=>i!==3).map(row=>row.amount===null?{...row,amount:140}:row);
 const result=processRows(repaired);
 assert.equal(result.accepted.length,7);
 assert.equal(result.issues.length,0);
 assert.deepEqual(result.totals,{north:430,west:400,south:180,east:360});
});
test('rejects nonfinite and negative amounts while preserving valid zero', () => {
 const result=processRows([{id:'a',region:' EAST ',amount:-1},{id:'b',region:'east',amount:NaN},{id:'c',region:'east',amount:0}]);
 assert.equal(result.issues.length,2);
 assert.deepEqual(result.totals,{east:0});
 assert.deepEqual(processRows([]),{accepted:[],issues:[],totals:{}});
});
