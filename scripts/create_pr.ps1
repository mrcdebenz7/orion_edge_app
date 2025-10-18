$ErrorActionPreference = 'Stop'

# Change to repo root (this script lives in scripts/)
Set-Location (Join-Path $PSScriptRoot '..')

$title = 'feat(kit): bootstrap orchestrator docs + Marketing Kit v1 + vertical FAQ packs'
$body = @'
PR checks to pass:

- [x] Ranges corrected
- [x] Deferral macro exact
- [x] Guardrails block present
- [x] Marketing Kit v1 + FAQ packs included & referenced
- [x] PR template + CODEOWNERS + checklist present
'@

$tmp = New-TemporaryFile
try {
    Set-Content -Encoding UTF8 -Path $tmp -Value $body
    gh pr create --title $title --body-file $tmp --base main --head 'feat/kit-bootstrap' | Out-Host
}
finally {
    Remove-Item -Force $tmp
}

# Emit PR URL
try {
    $prUrl = gh pr list --head 'feat/kit-bootstrap' --limit 1 --json url -q '.[0].url'
    if ($prUrl) { Write-Output $prUrl }
}
catch {}


