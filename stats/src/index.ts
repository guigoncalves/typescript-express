import { WinAnalyzer } from "./analyzers/WinAnalyzer";
import { CsvReader } from "./CsvReader";
import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./outputTargets/ConsoleReport";
import { Summary } from "./Summary";

const reader = new MatchReader(new CsvReader("football.csv"));
reader.load();

const sumary = new Summary(new ConsoleReport(), new WinAnalyzer("Man United"));
sumary.buildAndPrint(reader.matches);
