import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto("http://localhost:3000");

// Injecte axe-core en JS natif :
await page.addScriptTag({ path: "./node_modules/axe-core/axe.min.js" });

// Exécute l’audit dans la page via axe-core :
const results = await page.evaluate(async () => {
  return await window.axe.run(document, {
    runOnly: ["wcag2a", "wcag2aa"],
    reporter: "v2",
  });
});

// Filtrage par sévérité si tu veux encore :
const SEVERITY = ["critical", "serious", "moderate"];
const filtered = results.violations.filter((v) => SEVERITY.includes(v.impact));

if (filtered.length > 0) {
  console.error("Problèmes d’accessibilité détectés :");
  filtered.forEach((v) => {
    console.error(`[${v.impact}] ${v.help}: ${v.helpUrl}`);
  });
  await browser.close();
  process.exit(1);
}
console.log("✅ Aucun problème sévère d’accessibilité trouvé");
await browser.close();
process.exit(0);
