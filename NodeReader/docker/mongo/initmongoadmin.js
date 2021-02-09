/*jshint esversion: 6 */
db.createUser(
    {
        user: "madmin",
        pwd: "simple",
        roles: [
            {
                role: "root",
                db: "admin"
            }
        ]
    }
);



