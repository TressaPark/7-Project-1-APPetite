$(document).ready(function() {

    
    let corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
    let baseURL = 'https://api.yelp.com/v3/businesses/search?term=restaurants'
    let currentLocation = '&location=evanston'
    let searchRadius = '&radius=8000'
    let openNow = '&open_now=true'
    let limit = '&limit=50'

    //let resURL = ''
    //let offset = '&offset=0'

    

    $('.eat-button').on('click', function() {
        // currentLocation = `&location=${$('#location-input').val().trim()}`

    $.ajax({
        headers: {
           Authorization :'Bearer 4vjsOR6GBTFRdIl44Ji-AMEPHq0n1fyy-Y_iHYDkByXR5JDIl2K1Ni-kGavey75v3Xw0Mmwqrz0Kh1O23pFejvCIO8fiKP5N7zJKeCBEWdyelO1B3BESJhk2gyJtXnYx',
        },
            url: `${corsAnywhere + baseURL + currentLocation + searchRadius + openNow + limit}`,
            method: 'GET'
    }).then(function(response) {
        let resOffset = `&offset=${randomizeOffset(response)}`
        // Randomizes the offset parameter based on the 'total' value (all businesses mathching query parameters) returned by the query. Adds 50 to negative offset result.
        function randomizeOffset (responseData) {
            let offset = Math.floor(Math.random() * responseData.total - 50)
            if (offset < 0) {
                return offset+= 50
            }
            return offset
        }
        
        $.ajax({
            headers: {
               Authorization :'Bearer 4vjsOR6GBTFRdIl44Ji-AMEPHq0n1fyy-Y_iHYDkByXR5JDIl2K1Ni-kGavey75v3Xw0Mmwqrz0Kh1O23pFejvCIO8fiKP5N7zJKeCBEWdyelO1B3BESJhk2gyJtXnYx',
            },
                url: `${corsAnywhere + baseURL + currentLocation + searchRadius + openNow + limit + resOffset}`,
                method: 'GET'
        }).then(function(response2) {
            console.log(response2)
            // Array of 'businesses' returned by the query
            let restaurants = response2.businesses
            // New array of restaurants (filtered from 'restaurants') with a minimum rating of 3.5
            let resMinRating = _.filter(restaurants, function(n) {return n.rating >= 3.5})
            // Random restaurant from the array 'resMinRating'
            let randomRestaurant = resMinRating[Math.floor(Math.random() * resMinRating.length)]
            
            // let distToMiles = randomRestaurant.distance * 0.00062137
            // console.log (distToMiles)

            let resName = randomRestaurant.name
            let resRating = `<img src="assets/stars/${randomRestaurant.rating}.png">`
            //let resDistance = `<p>Distance from you: ${distToMiles.substring(0, 3)} Miles</p>`
            
            //let resImg = `<img src="${randomRestaurant.image_url}">`

            getResURL(randomRestaurant)
            
            $('#res-name').html(resName)
            $('#res-rating').html(resRating)
            // $('.res-distance').html(resDistance)


            //$('.content').html(resImg)
        })
        

        
    })

    })
    
    function getResURL(resData) {
        $('.website-button').attr('resURL', resData.url)
    }

    $('.website-button').on('click', function() {
        window.open($(this).attr('resURL'))
    })

//End of script    
})

// let restaurants = response.businesses
//         let randomRestaurant = restaurants[Math.floor(Math.random() * restaurants.length)]

//         let randomBlock = `
//         <h3>${randomRestaurant.name}</h3>
//         <p>${randomRestaurant.rating} Stars based on ${randomRestaurant.review_count} Reviews</p>
//         <p>Address: ${randomRestaurant.location.address1}</p>
//         <img src="${randomRestaurant.image_url}">
//         `
//         $('#random-restaurant').html(randomBlock)