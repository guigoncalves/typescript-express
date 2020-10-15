import { MatchData } from "./MatchData";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(data: string): void;
}

export class Summary {
  constructor(public outputTarget: OutputTarget, public analyzer: Analyzer) {}

  buildAndPrint(matches: MatchData[]) {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}
