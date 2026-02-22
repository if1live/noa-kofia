import { Command } from "commander";
import * as EntryPoint_Kofia from "./commands/main_kofia.ts";

const main = async () => {
  const program = new Command();
  program
    .addCommand(EntryPoint_Kofia.program)
    .allowUnknownOption(true);
  await program.parseAsync(process.argv);
};

main();
