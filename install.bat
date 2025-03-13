@echo off
where pip >nul 2>nul
if errorlevel 1 (
    echo [Error] Please install Pip!
    exit /b 0
) else (
    echo [Continue] You have installed pip, install edge-tts...
    pip install edge-tts
    echo [Complete] install edge-tts finish
)