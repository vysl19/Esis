﻿using Business.Cache;
using Data.Enity;
using NLog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Esis.Controllers
{
    public class CacheController : BaseController
    {
        private static Logger logger = LogManager.GetCurrentClassLogger();

        // POST: api/Cache
        [HttpPost]
        public void Clear(User user)
        {
            try
            {
                ValidateLogin(user);
                SubMenuCache.GetInstance().Reload();
                StringCache.GetInstance().Reload();
            }
            catch(Exception e)
            {
                logger.Error(string.Format("Hata=>{0} StackTrace=>{1}", e.Message, e.StackTrace));
            }            
        }        
    }
}
