using Data.Enity;
using Data.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Esis.Controllers
{
    public class BaseController : ApiController
    {
        public static void ValidateLogin(User user)
        {
            var userRepository = new UserRepository();
            if (!userRepository.Login(user))
            {
                throw new Exception(string.Format("Geçersiz login Ad =>{0} Sifre =>{1} Ip =>{2}", user.UserName, user.Password, GetIp()));
            }
        }
        public static string GetIp()
        {
            string ip = System.Web.HttpContext.Current.Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
            if (string.IsNullOrEmpty(ip))
            {
                ip = System.Web.HttpContext.Current.Request.ServerVariables["REMOTE_ADDR"];
            }
            return ip;
        }
    }
}
