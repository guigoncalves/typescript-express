import fs from "fs";
import { OutputTarget } from "../Summary";

export class HtmlReport implements OutputTarget {
  print(data: string): void {
    const html = `
      <div>
        <h1>Analyzis report</h1>
        <div>${data}</div>
      </div>
    `;
    fs.writeFileSync("report.html", html);
  }
}
