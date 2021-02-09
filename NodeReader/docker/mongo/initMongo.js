/*jshint esversion: 6 */
db.createUser(
    {
        user: "mongoj",
        pwd: "P0Nrx9LSyy^HAJ7zz^^ZYNo^k",
        roles: [
            {
                role: "readWrite",
                db: "tweets"
            }
        ]
    }
);