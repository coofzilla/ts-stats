//when importing node modules, install type definition file
//npm install @types/node
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

//create object that satisfied 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');
//create instance of MatchReader and pass in var created
const matchReader = new MatchReader(csvFileReader);
matchReader.load();



console.log(`Man United won ${manUnitedWins} games`);
