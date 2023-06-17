using System.ComponentModel.DataAnnotations.Schema;

namespace Project1.Models
{
    public class Rating
    {
        public int Id { get; set; }
        public int ShopId { get; set; }
        public string UserId { get; set; }
        public int Value { get; set; }
    }
}
