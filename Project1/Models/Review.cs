namespace Project1.Models
{
    public class Review
    {
        public int Id { get; set; }
        public int ShopId { get; set; }
        public int UserId { get; set; }
        public string Comment { get; set; }
    }
}
