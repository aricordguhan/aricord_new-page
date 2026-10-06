# Packages the static site as a WordPress plugin zip: dist/aricord-sample-page.zip
# Upload it in WP Admin > Plugins > Add New > Upload Plugin, then activate.

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.IO.Compression, System.IO.Compression.FileSystem

$root   = Split-Path -Parent $PSScriptRoot
$dist   = Join-Path $root 'dist'
$zip    = Join-Path $dist 'aricord-sample-page.zip'
$prefix = 'aricord-sample-page'

New-Item -ItemType Directory -Force $dist | Out-Null
if (Test-Path $zip) { Remove-Item $zip -Force }

# Plugin entry point + site files placed under site/
$files = @(@{ Src = Join-Path $PSScriptRoot 'aricord-sample-page.php'; Dst = "$prefix/aricord-sample-page.php" })
foreach ($name in 'index.html', 'news.html', 'style.css', 'script.js') {
    $files += @{ Src = Join-Path $root $name; Dst = "$prefix/site/$name" }
}
Get-ChildItem (Join-Path $root 'assets') -Recurse -File | ForEach-Object {
    $rel = $_.FullName.Substring($root.Length + 1).Replace('\', '/')
    $files += @{ Src = $_.FullName; Dst = "$prefix/site/$rel" }
}

# Build the zip by hand so entry names use forward slashes; Compress-Archive on
# Windows PowerShell 5.1 writes backslashes, which break extraction on Linux hosts.
$archive = [System.IO.Compression.ZipFile]::Open($zip, 'Create')
try {
    foreach ($f in $files) {
        [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($archive, $f.Src, $f.Dst) | Out-Null
    }
} finally {
    $archive.Dispose()
}

Write-Host "Built $zip ($($files.Count) files)"
