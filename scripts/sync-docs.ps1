param(
  [switch]$DryRun = $false,
  [switch]$Force = $false
)

$ErrorActionPreference = "Stop"

function Write-Title($t) { Write-Host "`n=== $t ===" -ForegroundColor Cyan }
function RoboOk($code){ return ($code -le 3) }

# --- PATH LOCALI (COERENTI) ---
$SrcRepoPath = "D:\in1-docs-content"
$SrcDocs     = "D:\in1-docs-content\in1-docs-content-publish\publish\"

$SiteRepoPath = "D:\in1-v1-stable"
$DstDocs      = "D:\in1-v1-stable\app\docs\"

# --- LOG ---
$ScriptDir = Split-Path -Parent $PSCommandPath
$LogsDir   = Join-Path $ScriptDir "logs"
New-Item -ItemType Directory -Force -Path $LogsDir | Out-Null
$Stamp     = Get-Date -Format "yyyyMMdd-HHmmss"
$LogPath   = Join-Path $LogsDir "sync-docs-$Stamp.log"

Write-Title "Verifiche iniziali"
$pathsToCheck = @($SrcRepoPath, $SrcDocs, $SiteRepoPath, $DstDocs)
foreach ($p in $pathsToCheck) {
  if (-not (Test-Path $p)) { throw "Percorso non trovato: $p" }
}

# --- Working tree pulita? ---
Write-Title "Controllo working tree sito"
$status = & git -C $SiteRepoPath status --porcelain
if ($status -and -not $Force) {
  Write-Host "⚠️  Working tree NON pulita in $SiteRepoPath. Usa -Force per procedere comunque." -ForegroundColor Yellow
  return
}

# --- Copia DOCS ---
Write-Title ("Copio DOCS " + ($(if($DryRun){"(DRY-RUN)"} else {"(REALE)"})))
$common = @("/E", "/XO", "/XD", ".obsidian", "/COPY:DAT", "/R:2", "/W:2", "/MT:16", "/NFL", "/NDL", "/NJH", "/NJS", "/NP", "/TEE", "/LOG+:$LogPath")
if ($DryRun) { $common += "/L" }
& robocopy $SrcDocs $DstDocs *.* $common
$docsExit = $LASTEXITCODE
if (-not (RoboOk $docsExit)) { throw "Errore Robocopy DOCS (exit $docsExit). Vedi log $LogPath" }

if ($DryRun) {
  Write-Title "DRY-RUN completato"
  Write-Host "Log: $LogPath"
  return
}

# --- Commit & push sul sito ---
Write-Title "Git add/commit/push su sito"
& git -C $SiteRepoPath add "app/docs"
$changes = & git -C $SiteRepoPath status --porcelain
if (-not $changes) {
  Write-Host "Nessun cambiamento da committare."
  Write-Host "Log: $LogPath"
  return
}

$msg = "chore(docs): sync publish → docs $((Get-Date).ToString('yyyy-MM-dd HH:mm'))"
& git -C $SiteRepoPath commit -m $msg
& git -C $SiteRepoPath push origin main

Write-Title "Sync COMPLETATO"
Write-Host "Commit: $msg"
Write-Host "Log: $LogPath"
return
