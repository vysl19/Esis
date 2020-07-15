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
    public class MetaController : ApiController
    {
        private static Logger logger = LogManager.GetCurrentClassLogger();
        // GET: api/About
        [HttpGet]
        public List<Meta> List()
        {
            try
            {
                var metaRepository = new MetaRepository();
                return metaRepository.List();
            }
            catch (Exception e)
            {
                logger.Error(string.Format("Hata=>{0} StackTrace=>{1}", e.Message, e.StackTrace));
            }
            return new List<Meta>();
        }


        // POST: api/About
        [HttpPost]
        public void Post([FromBody] Meta meta)
        {
            try
            {
                var metaRepository = new MetaRepository();
                metaRepository.Update(meta);
            }
            catch (Exception e)
            {
                logger.Error(string.Format("Hata=>{0} StackTrace=>{1}", e.Message, e.StackTrace));
            }
        }
    }
}
