#!/bin/sh
git filter-branch --env-filter '
OLD_EMAIL="Zhihao@ZhihaoTans-MacBook-Air.local"
CORRECT_NAME="paradisetan798@gmail.com"
CORRECT_EMAIL="paradisetan798@gmail.com"
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags