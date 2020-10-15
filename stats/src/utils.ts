export function dateStringToDate(dateString: string) {
  const date = dateString.split("/")
    .map((date: string) => parseInt(date));

  return new Date(date[2], date[1] - 1, date[0]);
}
