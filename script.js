$('.container').hide()
$(document).ready(function() {

    $('body').addClass('waiting')
    
    // Prompts user for location access permission on page load
    navigator.geolocation.getCurrentPosition(function(position) {
        $('body').removeClass('waiting')
    
        let corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
        let baseURL = 'https://api.yelp.com/v3/businesses/search?term=restaurants'
        let currentLocation = `&latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`
        let searchRadius = '&radius=8000'
        let openNow = '&open_now=true'
        let limit = '&limit=50'

        

        $('.eat-button').on('click', function() {
            // currentLocation = `&location=${$('.location-input').val().trim()}`
            // $('.eat-button').addClass('scale-out')
        
            // var button = $('.eat-button'),
            // spinner = '<span class="spinner"></span>';
        
            // if (!button.hasClass('loading')) {
            //     button.toggleClass('loading').html(spinner);
            // }
            // else {
            //     button.toggleClass('loading').html("Load");
            // }

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
                }).then(function(responseUpdated) {
                    // Array of 'businesses' returned by the query
                    let restaurants = responseUpdated.businesses
                    // New array of restaurants (filtered from 'restaurants') with a minimum rating of 3.5
                    let resMinRating = _.filter(restaurants, function(resFiltered) {return resFiltered.rating >= 3.5})
                    // Random restaurant from the array 'resMinRating'
                    let randomRestaurant = resMinRating[Math.floor(Math.random() * resMinRating.length)]

                    // Converts restaurant distance to miles. Changes variable to a string
                    let distToMiles = (randomRestaurant.distance * 0.00062137).toString()
                    // Formats distance so that only one decimal place is shown (4.123 => 4.1)
                    let milesFormatted = distToMiles.substring(0, distToMiles.indexOf('.') + 2)
                    
                    let resName = randomRestaurant.name
                    let resRating = `<img src="assets/stars/${randomRestaurant.rating}.png">`
                    let resDistance = `<p>${milesFormatted} miles away</p>`
                    let resImage = `<img class="z-depth-2 res-img" src="${randomRestaurant.image_url}">`
                    $('.res-categories').empty()
                    randomRestaurant.categories.forEach(category => {
                        let resCategory = `<span>&#8226 ${category.title} </span>`
                        $('.res-categories').append(resCategory)
                    })
                    
                    $('.res-name').html(resName)
                    $('.res-rating').html(resRating)
                    $('.res-distance').html(resDistance)
                    $('.res-image').html(resImage)

                    getResURL(randomRestaurant)

                    $('.container').show()
                    $('.container').addClass('scale-in')
                    // $('.eat-button').removeClass('scale-out').addClass('scale-in')
                })
            })
        })
        
        // Sets an attribute 'resURL' (in this case the yelp url of the selected restaurant) to the '.website-button' element
        function getResURL(resData) {
            $('.website-button').attr('resURL', resData.url)
        }

        $('.website-button').on('click', function() {
            window.open($(this).attr('resURL'))
        })


    })
//End of script    
})





