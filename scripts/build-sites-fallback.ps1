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

# Keep the deployed homepage self-contained. Some networks can load the HTML
# while delaying or challenging its JavaScript and stylesheet subrequests,
# which leaves visitors stuck on the initial shell.
$styleTagPattern = '<link\s+rel="stylesheet"\s+crossorigin\s+href="\./(?<path>assets/[^"]+\.css)">'
$styleTagMatch = [regex]::Match($index, $styleTagPattern)
if (-not $styleTagMatch.Success) { throw 'Missing application stylesheet tag in index.html.' }
$stylePath = Join-Path $clientRoot ($styleTagMatch.Groups['path'].Value.Replace('/', [System.IO.Path]::DirectorySeparatorChar))
if (-not (Test-Path -LiteralPath $stylePath)) { throw "Missing application stylesheet: $stylePath" }
$styleSource = [System.IO.File]::ReadAllText($stylePath, [System.Text.Encoding]::UTF8)
if ($styleSource -match '</style') { throw 'Application stylesheet cannot be safely inlined.' }
$index = $index.Replace($styleTagMatch.Value, "<style>`n$styleSource`n</style>")

$scriptTagPattern = '<script\s+type="module"\s+crossorigin\s+src="\./(?<path>assets/[^"?]+\.js)(?:\?[^\"]*)?"></script>'
$scriptTagMatch = [regex]::Match($index, $scriptTagPattern)
if (-not $scriptTagMatch.Success) { throw 'Missing application module tag in index.html.' }
$scriptPath = Join-Path $clientRoot ($scriptTagMatch.Groups['path'].Value.Replace('/', [System.IO.Path]::DirectorySeparatorChar))
if (-not (Test-Path -LiteralPath $scriptPath)) { throw "Missing application module: $scriptPath" }
$scriptSource = [System.IO.File]::ReadAllText($scriptPath, [System.Text.Encoding]::UTF8)
if ($scriptSource -match '</script') { throw 'Application module cannot be safely inlined.' }
$index = $index.Replace($scriptTagMatch.Value, "<script type=`"module`">`n$scriptSource`n</script>")

[System.IO.File]::WriteAllText((Join-Path $clientRoot 'index.html'), $index, [System.Text.UTF8Encoding]::new($false))

$photography = [System.IO.File]::ReadAllText((Join-Path $projectRoot 'photography.html'), [System.Text.Encoding]::UTF8)
$photography = $photography.Replace('https://610lulu.github.io/Photography-Portfolio-2/', '/Photography-Portfolio-2/')
[System.IO.File]::WriteAllText((Join-Path $clientRoot 'photography.html'), $photography, [System.Text.UTF8Encoding]::new($false))

Copy-Item -LiteralPath (Join-Path $projectRoot 'sites\worker.js') -Destination (Join-Path $serverRoot 'index.js')

Write-Output "Sites build created at $distRoot"
