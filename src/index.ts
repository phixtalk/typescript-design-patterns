import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { WinsAnalysis } from "./analyzers/WinsAnalysis"
import { ConsoleReports } from "./reportTargets/consoleReports";
import { Summary } from "./Summary";
import { HtmlReport } from "./reportTargets/HtmlReport";

// -- interface implementation
//  1. Create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv');

// // 2. Create an instance of MatchReader and pass in the object that satisfies the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);

//a little refactor, using static methods to hide implementation of newing up new objects
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

//3. Next we create 2 objects that satisfies our Analyzer and OutputTarget interfaces
const analyzer = new WinsAnalysis('Man United');
// const outputTarget = new ConsoleReports();
const outputTarget = new HtmlReport();

//4. Finally use these objects as input into out Summary class
const summary = new Summary(analyzer, outputTarget);
summary.buildAndPrintReport(matchReader.matches);







// -- For inheritance
// const reader = new MatchReader('football.csv');
// reader.read();

//let manUnitedWins = 0;

//for inheritance
// for (const match of reader.data) {
//     if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
//         manUnitedWins++;
//     }else if(match[2] === 'Man United' && match[5] === MatchResult.AwayWin){
//         manUnitedWins++;
//     }
// }
