const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
const { listingSchema } = require("./schema.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.engine("ejs", ejsMate);

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}
main()
    .then(() => {
        console.log("connection successful to mongodb");
    })
    .catch((err) => console.log(err));
app.get("/", (req, res) => {
    res.send("Home Page");
});

// app.get("/testListing", async (req, res) => {
//     let sampleListing = new Listing({
//         title: "My New Villa",
//         description: "By the beach",
//         price: 1500,
//         location: "Calangute, Goa",
//         country: "India",
//     });
//     await sampleListing.save();
//     console.log(sampleListing);
//     res.send("Successfully Added");
// });

const validateListing = (req, res, next) => {
    let error = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

app.get(
    "/listings",
    wrapAsync(async (req, res) => {
        const allListings = await Listing.find({});
        res.render("listings/index.ejs", { allListings });
    })
);

app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});

app.get(
    "/listings/:id",
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        const listing = await Listing.findById(id);
        res.render("listings/show.ejs", { listing });
        // console.log(listing.price);
        // res.send("workd");
    })
);

app.post(
    "/listings",
    validateListing,
    wrapAsync(async (req, res) => {
        // let { title, description, price, location, country } = req.body;
        // let sampleListing = new Listing({
        //     title: title,
        //     description: description,
        //     price: price,
        //     location: location,
        //     country: country,
        // });

        // const listing = req.body.listing.image.url;
        // console.log(listing);

        //handling if image is not passed

        const listingData = req.body.listing;

        if (
            !listingData.image ||
            !listingData.image.url ||
            listingData.image.url.trim() === ""
        ) {
            delete listingData.image;
        }
        const newListing = new Listing(req.body.listing);

        await newListing.save();

        res.redirect("/listings");
    })
);

// edit route
app.get(
    "/listings/:id/edit",
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        const listing = await Listing.findById(id);
        res.render("listings/edit.ejs", { listing });
    })
);

//update route
app.put(
    "/listings/:id",
    validateListing,
    wrapAsync(async (req, res) => {
        if (!req.body.listing) {
            throw new ExpressError(400, "Send valid data for listing");
        }
        let { id } = req.params;
        await Listing.findByIdAndUpdate(id, { ...req.body.listing });

        // console.log(listing);
        res.redirect(`/listings/${id}`);
    })
);

// delete route
app.delete(
    "/listings/:id",
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        const delListing = await Listing.findByIdAndDelete(id);
        res.redirect("/listings");
    })
);

app.use((req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "something went wrong" } = err;
    // res.status(statusCode).send(message);
    res.status(statusCode).render("error.ejs", { message });
});

app.listen(8080, () => {
    console.log("Server listening at port 8080");
});
