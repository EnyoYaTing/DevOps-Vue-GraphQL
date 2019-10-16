# Client Compile
npm run dev

# Server Compile
node index.js

# Robot
This is the crawler's folder.

```
.
├── README.md                 # Introduction for this folder
├── main.py                   # main function for parser
├── crontab                   # crontab for Linux
└── src                       # source folder
    ├── library.py            # general functions for crawling robots
    ├── name_list.py          # Constant variables list
    ├── mongo.py              # MongoDB methods
    └── parser.py             # Parser methods
```

There are two main methods in this folder
1. update_team_table()
Update standing table for premier league from the website, Football Web Pages.
2. update_period_result()
Update game results from the website, Goal.

## Crontab
We don't have linux server but, in here, we demonstrate how to use crontab to update data daily
