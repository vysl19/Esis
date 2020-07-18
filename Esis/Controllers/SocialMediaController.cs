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
    public class SocialMediaController : BaseController
    {
        private static Logger logger = LogManager.GetCurrentClassLogger();
        // GET: api/About
        [HttpGet]
        public List<SocialMedia> List()
        {
            try
            {
                var socialMediaRepository = new SocialMediaRepository();
                return socialMediaRepository.List();
            }
            catch (Exception e)
            {
                logger.Error(string.Format("Hata=>{0} StackTrace=>{1}", e.Message, e.StackTrace));
            }
            return new List<SocialMedia>();
        }


        // POST: api/About
        [HttpPost]
        public void Post([FromBody] SocialMedia socialMedia)
        {
            try
            {
                ValidateLogin(socialMedia);
                var socialMediaRepository = new SocialMediaRepository();
                socialMediaRepository.Update(socialMedia);
            }
            catch (Exception e)
            {
                logger.Error(string.Format("Hata=>{0} StackTrace=>{1}", e.Message, e.StackTrace));
            }
        }
    }
}
