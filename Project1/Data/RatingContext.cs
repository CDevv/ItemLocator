using Microsoft.EntityFrameworkCore;
using Project1.Models;

namespace Project1.Data
{
    public class RatingContext : DbContext
    {
        public RatingContext(DbContextOptions<RatingContext> options) : base(options)
        {

        }
        public DbSet<Project1.Models.Rating>? Rating { get; set; }
        
    }
}