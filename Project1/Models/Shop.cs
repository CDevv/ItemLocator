namespace Project1.Models
{
    public class Shop
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string ContactNumber { get; set; }
        public string OpeningHours { get; set; }
        public string Services { get; set; }
        public List<Rating> Ratings { get; set; }
        public List<Review> Reviews { get; set; }
        public List<Item> Items { get; set; }
    }
}
