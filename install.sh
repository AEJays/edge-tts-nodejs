if test -z "$(which pip)";
then 
    echo "\033[31m[Error]\033[0m Please install Pip!" && exit 0
else 
    echo "\033[32m[Continue] You have installed pip, install edge-tts...\033[34m"
    pip install edge-tts
    echo "\033[32m[Complete] install edge-tts finish\033[0m"
fi