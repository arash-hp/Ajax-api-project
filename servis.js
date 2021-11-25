const _getUsers = (page) =>
    new Promise((resolve, reject) => {
        $.ajax({
            type: 'get',
            url: `https://reqres.in/api/users?page=${page}`,
            success: function (response) {
                resolve(response.data);
                console.log(response.data)
            },
        });
    });
