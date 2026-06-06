import { cpSync, existsSync, rmSync } from "fs";
import { spawnSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const apiDir = path.join(root, "src", "app", "api");
const apiBackup = path.join(root, "src", "app", "_api_backup");

function run(command, args, env = {}) {
  const result = spawnSync(command, args, {
    cwd: root,
    stdio: "inherit",
    shell: true,
    env: { ...process.env, ...env },
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

try {
  if (existsSync(apiDir)) {
    rmSync(apiBackup, { recursive: true, force: true });
    cpSync(apiDir, apiBackup, { recursive: true });
    rmSync(apiDir, { recursive: true, force: true });
  }

  run("npm", ["run", "build"], {
    STATIC_EXPORT: "true",
  });

} finally {
  if (existsSync(apiBackup)) {
    rmSync(apiDir, { recursive: true, force: true });
    cpSync(apiBackup, apiDir, { recursive: true });
    rmSync(apiBackup, { recursive: true, force: true });
  }
}
