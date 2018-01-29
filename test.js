var balUrl = '';

var ethAdd = '0xa5fefbf4cb73a13ec329c1b815b436b03da26adb';
var CBethAdd = '0xf5Df999008a808BCF03691701846c3ed0b9691B1';
var CBbitAdd = '1CLceiwBxhBCiLNeXZbb2rx21hJjj6S3ux';
var adaAdd = '';

var apiKey = '';

fetch(https://api.coinmarketcap.com/v1/ticker/?limit=10)
    .then(
        function(response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
            }

            response.json().then(function(data) {
                console.log(data);
            })
        }
    )
    .catch(function(err) {
        console.log('Fetch error :-S', err);
    });