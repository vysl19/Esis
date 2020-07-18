using Data.Enity;
using Data.Repository;
using NLog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Esis.Controllers
{
    public class LoginController : ApiController
    {
        private static Logger logger = LogManager.GetCurrentClassLogger();
        // POST: api/Login
        [HttpPost]
        public bool Post([FromBody] User user)
        {
            try
            {
                var userRepository = new UserRepository();
                return userRepository.Login(user);
            }
            catch (Exception e)
            {
                logger.Error(string.Format("Hata=>{0} StackTrace=>{1}", e.Message, e.StackTrace));
            }
            return false;
        }

    }
}
