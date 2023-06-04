namespace Project1.Models
{
    public class Item
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public int ShopId { get; set; }
        public bool Availability { get; set; }
        public double Quantity { get; set; }
        public string Variations { get; set; }
    }
}
