# Excel source archive

These files were moved out of `src/data/` on 2026-09-11 during the data-architecture
cleanup. They are **not read by the application** at build time or runtime (no
`xlsx`/`exceljs` dependency and no import anywhere in `src`) — they are historical
working copies from the manual spreadsheet-to-TypeScript conversion that produced
`src/data/places.ts`.

## current/

`Nishi_Tama_Master_Explorer_Database_CLEANED.xlsx` — the authoritative source.
`src/data/places.ts` names this exact file in its header comment as the sheet
("Place Database", 121 rows) that was normalized into the `places` array. Treat
this file as the reference copy if the place database ever needs to be
re-verified or re-imported.

## historical/

`Nishi_Tama_Master_Explorer_Database_CLEANED1.xlsx` and
`Nishi_Tama_Master_Explorer_Database_CLEAN_FINAL_OLD.xlsx.xlsx` — earlier
iterations kept for reference. Neither is cited by any code comment as the
source of the current `places.ts` data. Kept here rather than deleted, per
instruction not to permanently remove historical files without explicit
confirmation.

**Pending decision:** confirm whether the two historical files can be deleted,
or should stay archived indefinitely.
