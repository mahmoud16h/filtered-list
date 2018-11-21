# Floom Frontend Challenge

Great you're looking to get involved with Floom. Fork this repo, push your solution and add us as a collaborator when your'e ready. 

## Brief

We have a simple api, a lazy designer and some technically competent users. With this we're gonna make a clean and useful list of products and their details. With the three sources of info below, you should be able to put a single page site together, filling in gaps in information aas you go. 

### Design

The basic designs are over [here](https://whimsical.co/A8oN1FGgwZCfiZXvicER6A). The designer left the office muttering something about "32 point padding...". Make any assumptions you need to in her absence. 


### Data

The list relies on `merchant` and `product` data. Start the api by first running `npm install` then `npm run api`. You'll now be able to access two key endpoints:

`http://localhost:8888/merchants`

`http://localhost:8888/products`

A Merchant (Florist) has a name, a lat lng location and radius in meters that they can deliver to. 

A Product (Bouquet) has a name, description, price, tags, a merchant and some locally stored images. 


### Filtering

When the page loads we show all our products. The user can then filter down by delivery location and/or tags. 

##### Location

Our users are pretty smart, they know the latitude and longitude of their homes. To see if the merchant will deliver to their home, we'll compare their coordinates with the merchants coordinates and see if it fits within the merchants delivery radius, given in meters. 

##### Tags

Each product has some tags that describe it, such as it's color and style. We can offer these in a drop down.



## Deliverables

The single page must be built in React. Beyond that you're open to use any frameworks you wish or stay vanilla if you fancy it. We'll discuss your choices in our follow up meeting.

 
