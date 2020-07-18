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
    public class MailController : BaseController
    {
        private static Logger logger = LogManager.GetCurrentClassLogger();
        // GET: api/About
        [HttpGet]
        public List<Mail> List()
        {
            try
            {
                var mailRepository = new MailRepository();
                return mailRepository.List();
            }
            catch (Exception e)
            {
                logger.Error(string.Format("Hata=>{0} StackTrace=>{1}", e.Message, e.StackTrace));
            }
            return new List<Mail>();
        }


        // POST: api/About
        [HttpPost]
        public void Post([FromBody] Mail mail)
        {
            try
            {
                ValidateLogin(mail);
                var mailRepository = new MailRepository();
                mailRepository.Update(mail);
            }
            catch (Exception e)
            {
                logger.Error(string.Format("Hata=>{0} StackTrace=>{1}", e.Message, e.StackTrace));
            }
        }

    }
}
