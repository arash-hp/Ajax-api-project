_getUsers(1).then((users_1) => {
    _getUsers(2).then((users_2) => {
            let users = [...users_1,...users_2]
        users.map((user) => {

            addCard({
                FirstName: user.first_name,
                lastName: user.last_name,
                email: user.email,
                avatar: user.avatar,
            });
        });
    });
});

