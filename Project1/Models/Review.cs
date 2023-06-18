﻿using System.ComponentModel.DataAnnotations.Schema;

namespace Project1.Models
{
    public class Review
    {
        public int Id { get; set; }
        public int ShopId { get; set; }
        public string UserId { get; set; }
        public string Comment { get; set; }

        public string UserName { get; set; }
    }
}
