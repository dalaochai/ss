#!name=tubepod
#!desc=tubepod

[Script]
tubepod = type=http-response, pattern=^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt, script-path=https://raw.githubusercontent.com/Yu9191/Rewrite/main/itunes/tubepod.js, requires-body=true, max-size=-1, timeout=60

[MITM]
hostname = %APPEND% buy.itunes.apple.com
