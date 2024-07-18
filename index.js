import {Travails} from './components/travails.js';

const travailsGraph = new Travails();

const path=travailsGraph.pathFind([5,6],[5,7]);

console.log( path );

