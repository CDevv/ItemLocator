using Microsoft.EntityFrameworkCore;
using Project1.Models;

namespace Project1.Data
{
    public class ItemContext : DbContext
    {
        public ItemContext(DbContextOptions<ItemContext> options) : base(options)
        {
            
        }
        public DbSet<Project1.Models.Item>? Item { get; set; }
    }
}
