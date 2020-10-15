import { timeStamp } from "console";
import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";
import { Analyzer } from "../Summary";

export class WinAnalyzer implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wonMatches = 0;

    for (let match of matches) {
      if (match[1] == this.team && match[5] == MatchResult.HomeWin) {
        wonMatches++;
      } else if (match[2] == this.team && match[5] == MatchResult.AwayWin) {
        wonMatches++;
      }
    }
    return `${this.team} won ${wonMatches} matches.`;
  }
}
