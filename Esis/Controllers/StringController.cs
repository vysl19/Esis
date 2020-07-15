using Business.Cache;
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
    public class StringController : ApiController
    {
        private static Logger logger = LogManager.GetCurrentClassLogger();
        // GET: api/SubMenu
        [HttpGet]
        public Dictionary<string, string> List()
        {
            try
            {
                return StringCache.GetInstance().GeValues();
            }
            catch (Exception e)
            {
                logger.Error(string.Format("Hata=>{0} StackTrace=>{1}", e.Message, e.StackTrace));
            }
            return new Dictionary<string, string>();

        }
        // POST: api/SubMenu
        [HttpPost]
        public void Post([FromBody] SM sm)
        {
            try
            {
                var subMenuRepository = new StringRepository();               
                subMenuRepository.Upsert(sm);
            }
            catch (Exception e)
            {
                logger.Error(string.Format("Hata=>{0} StackTrace=>{1}", e.Message, e.StackTrace));
            }

        }   
    }
}
