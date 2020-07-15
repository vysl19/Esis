using Business.Cache;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Esis.Controllers
{
    public class CacheController : ApiController
    {

        // POST: api/Cache
        [HttpPost]
        public void Clear()
        {
            SubMenuCache.GetInstance().Reload();
            StringCache.GetInstance().Reload();
        }        
    }
}
