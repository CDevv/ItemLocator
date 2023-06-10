using Duende.IdentityServer.Extensions;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NuGet.Protocol;
using Project1.Data;
using Project1.Models;
using System.Security.Claims;
using System.Security.Principal;
using System.Web;

namespace Project1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IHttpContextAccessor _contextAccessor;
        private readonly SignInManager<ApplicationUser> _signInManager;

        public UsersController(ApplicationDbContext context, UserManager<ApplicationUser> userManager, IHttpContextAccessor contextAccessor, SignInManager<ApplicationUser> signInManager)
        {
            _context = context;
            _userManager = userManager;
            _contextAccessor = contextAccessor;
            _signInManager = signInManager;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ApplicationUser>>> GetUser()
        {
            
            if (_context.Users == null)
            {
                return NotFound();
            }
            return await _context.Users.ToListAsync();
        }

        [HttpGet("current")]
        public async Task<ActionResult<string>> GetLoggedInUserAsync()
        {

            if (_context.Users == null)
            {
                return NotFound();
            }

            string userId = _userManager.GetUserId(HttpContext.User);

            if (HttpContext.User == null)
            {
                return NotFound();
            }

            return userId;
        }

    }
}
