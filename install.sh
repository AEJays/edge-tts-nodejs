if test -z "$(which pip)";
then 
    echo "[Error] Please install Pip!" && exit 0
else 
    echo "[Continue] You have installed pip, install edge-tts..."
    pip install edge-tts
    echo "[Complete] install edge-tts finish"
fi