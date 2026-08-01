$ErrorActionPreference = 'Stop'

$projectRoot = (Resolve-Path -LiteralPath (Join-Path $PSScriptRoot '..')).Path
$distRoot = Join-Path $projectRoot 'dist'
$clientRoot = Join-Path $distRoot 'client'
$serverRoot = Join-Path $distRoot 'server'

if (Test-Path -LiteralPath $distRoot) {
  $resolvedDist = (Resolve-Path -LiteralPath $distRoot).Path
  if (-not $resolvedDist.StartsWith($projectRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
    throw 'Refusing to replace a dist directory outside the project.'
  }
  Remove-Item -LiteralPath $resolvedDist -Recurse -Force
}

New-Item -ItemType Directory -Path $clientRoot, $serverRoot | Out-Null

Copy-Item -LiteralPath (Join-Path $projectRoot 'assets') -Destination $clientRoot -Recurse
Copy-Item -LiteralPath (Join-Path $projectRoot 'images') -Destination $clientRoot -Recurse
Copy-Item -LiteralPath (Join-Path $projectRoot 'video') -Destination $clientRoot -Recurse

$clientImages = Join-Path $clientRoot 'images'
Get-ChildItem -LiteralPath $clientImages -File |
  Where-Object { $_.Length -gt 2MB } |
  ForEach-Object { Remove-Item -LiteralPath $_.FullName -Force }

$clientVideo = Join-Path $clientRoot 'video'
Get-ChildItem -LiteralPath $clientVideo -File |
  Where-Object { $_.Length -gt 10MB } |
  ForEach-Object { Remove-Item -LiteralPath $_.FullName -Force }

$index = [System.IO.File]::ReadAllText((Join-Path $projectRoot 'index.html'), [System.Text.Encoding]::UTF8)
$previewMatch = [regex]::Match(
  $index,
  "var previewVideoSrc = './video/(?<name>[^']+\.mp4)';"
)
if (-not $previewMatch.Success) { throw 'Missing previewVideoSrc in index.html.' }
$previewName = $previewMatch.Groups['name'].Value
if (-not (Test-Path -LiteralPath (Join-Path $clientVideo $previewName))) {
  throw "Missing lightweight project preview video: $previewName"
}
$videoSrcPattern = "var videoSrc = './video/[^']+\.mp4';"
if (-not [regex]::IsMatch($index, $videoSrcPattern)) {
  throw 'Missing videoSrc in index.html.'
}
$index = [regex]::Replace(
  $index,
  $videoSrcPattern,
  "var videoSrc = './video/$previewName';",
  1
)
[System.IO.File]::WriteAllText((Join-Path $clientRoot 'index.html'), $index, [System.Text.UTF8Encoding]::new($false))

$photography = [System.IO.File]::ReadAllText((Join-Path $projectRoot 'photography.html'), [System.Text.Encoding]::UTF8)
$photography = $photography.Replace('https://610lulu.github.io/Photography-Portfolio-2/', '/Photography-Portfolio-2/')
[System.IO.File]::WriteAllText((Join-Path $clientRoot 'photography.html'), $photography, [System.Text.UTF8Encoding]::new($false))

Copy-Item -LiteralPath (Join-Path $projectRoot 'sites\worker.js') -Destination (Join-Path $serverRoot 'index.js')

Write-Output "Sites build created at $distRoot"
