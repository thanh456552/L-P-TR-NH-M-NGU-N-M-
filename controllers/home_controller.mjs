import City from "../models/city.mjs";

class HomeController {
  static async index(req, res) {
    try {
      let data = await City.find({});
      let city = parseInt(req.query.city);

      // Check if city is a valid index in the data array
      if (!isNaN(city) && data[city]) {
        let plate_no = data[city].plate_no;
        console.log(plate_no);
        res.render("index", { title: "Home Page", data, plate_no });
      } else {
        // Handle case where city index is invalid or data is empty
        console.log("Invalid city index or no data available");
        res.render("index", { title: "Home Page", data, plate_no: null });
      }
    } catch (error) {
      console.error("Error retrieving data:", error);
      res.status(500).send("Server Error");
    }
  }
}

export default HomeController;
