#!/bin/bash
cd /tmp/kavia/workspace/code-generation/tictactoe-duel-1215-910775a5/tictactoe_duel
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

