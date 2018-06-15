' ProdID.vbs,  Version 1.01 for WSH 5.6
' Display Windows' Product ID
'
' Usage:  CSCRIPT //NoLogo ProdID.vbs
'
' Written by Rob van der Woude
' http://www.robvanderwoude.com
 
Set Shell = CreateObject("WScript.Shell")
 
ProductID = Shell.RegRead("HKLM\Software\Microsoft\Windows NT\CurrentVersion\ProductId")
 
WScript.Echo(vbCrLf & "ProductID=" & ProductID)