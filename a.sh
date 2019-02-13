git filter-branch --env-filter ' 
if test "$GIT_AUTHOR_EMAIL" = "Zhihao@ZhihaoTans-MacBook-Air.local"
then
    GIT_AUTHOR_NAME="kesalomamatka"
    GIT_AUTHOR_EMAIL="paradisetan798@gmail.com"
fi
export GIT_AUTHOR_NAME
export GIT_AUTHOR_EMAIL
'
