//when importing node modules, install type definition file
//npm install @types/node
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
// import { CsvFileReader } from './CsvFileReader';
// import { ConsoleReport } from './reportTargets/ConsoleReport';
// import { WinsAnalysis } from './analyzers/WinsAnalysis';
// import { HtmlReport } from './reportTargets/HtmlReports';

//create object that satisfied 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv');
//create instance of MatchReader and pass in var created
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
