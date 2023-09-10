import * as dv from "./dv";

const looseTasksQuery = `
  (not done)
  ((no scheduled date) OR (scheduled before tomorrow))
  (path regex does not match /^Templates/)
  hide task count
  hide edit button
`;

dv.paragraph("```tasks\n" + looseTasksQuery + "\n```");
