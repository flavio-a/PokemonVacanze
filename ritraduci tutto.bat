ECHO OFF
FOR /R %~dp0\ %%f in (*.phtml) do (
    ECHO Sostituzione %%f
    TemplateRep.exe %%f
    ECHO ---------------------)
ECHO Fine
PAUSE