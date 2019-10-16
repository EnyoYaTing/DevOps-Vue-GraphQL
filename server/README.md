
``` bash
# install dependencies
npm install

# start server at port http://localhost:400
node ./index.js


# get all result order by date desc
{
  
  getResults(orderBy:"date",direction:DESC) {
    _id,
    date
  }
}

# get all result order by _id asc
{
  
  getResults(orderBy:"_id",direction:ASC) {
    _id,
    date
  }
}

# get all table order by pts asc
{
  
  getTables(orderBy:"pts",direction:ASC) {
    _id,
    name,
    pts,
    h_pts
  }
}




```

