const somethingWillHappen = () => {
    return new Promise((resolve , reject ) => {
        if (false) {
            resolve('Hey!');
        }
        else{
            reject('Whoops!');
        };
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.log(err));
